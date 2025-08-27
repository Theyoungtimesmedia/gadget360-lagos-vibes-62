import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const GeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm your Gadget360.ng assistant. I can help you find the perfect tech products, answer questions about our services, or connect you with our team. What can I help you with today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [customerName, setCustomerName] = useState("");
  const [nameSet, setNameSet] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Generate a unique session ID when component mounts
    setSessionId(crypto.randomUUID());
  }, []);

  const createChatSession = async () => {
    try {
      const { data: sessionData, error } = await supabase
        .from('chat_sessions')
        .insert({
          customer_name: customerName.trim(),
          is_active: true,
          user_id: user?.id || null // Use current user if logged in, otherwise null
        })
        .select('id')
        .maybeSingle();

      if (error) {
        console.error('Error creating chat session:', error);
        toast({
          title: "Error",
          description: `Failed to create chat session: ${error.message}`,
          variant: "destructive"
        });
        return null;
      }

      if (!sessionData) {
        toast({
          title: "Error",
          description: "Failed to create chat session. Please try again.",
          variant: "destructive"
        });
        return null;
      }

      return sessionData.id;
    } catch (error) {
      console.error('Error creating chat session:', error);
      toast({
        title: "Error", 
        description: "Unable to connect to chat service.",
        variant: "destructive"
      });
      return null;
    }
  };

  const handleNameSubmit = async () => {
    if (!customerName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name to start chatting.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    const newSessionId = await createChatSession();
    if (newSessionId) {
      setSessionId(newSessionId);
      setNameSet(true);
      toast({
        title: "Welcome!",
        description: `Hi ${customerName}! You can now start chatting.`,
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to start chat session. Please try again.",
        variant: "destructive"
      });
    }
    setLoading(false);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('gemini-chat', {
        body: {
          message: currentInput,
          sessionId: sessionId,
          customerName: customerName
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I'm experiencing technical difficulties. Please contact us on WhatsApp at +2347067894474.",
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm experiencing technical difficulties. Please contact us directly on WhatsApp at +2347067894474 for immediate assistance!",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!nameSet) {
        handleNameSubmit();
      } else {
        handleSendMessage();
      }
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/2347067894474", "_blank");
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-50 flex items-center justify-center"
          size="icon"
        >
          <MessageCircle size={28} />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-xl z-50 flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <CardTitle className="text-lg">Gadget360.ng Assistant</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X size={16} />
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Powered by AI • Usually replies instantly
            </p>
          </CardHeader>

          <CardContent className="flex-1 p-0 flex flex-col">
            {!nameSet ? (
              // Name input screen
              <div className="flex-1 p-4 flex flex-col justify-center items-center text-center space-y-4">
                <Bot size={48} className="text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">Welcome to Gadget360.ng!</h3>
                  <p className="text-sm text-muted-foreground">
                    Please enter your name to start chatting with our AI assistant
                  </p>
                </div>
                <div className="w-full space-y-2">
                  <Input
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-center"
                  />
                  <Button 
                    onClick={handleNameSubmit} 
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Starting..." : "Start Chat"}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 text-sm ${
                          message.isBot
                            ? "bg-muted text-foreground"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.isBot ? (
                            <Bot size={16} className="mt-0.5 flex-shrink-0" />
                          ) : (
                            <User size={16} className="mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="whitespace-pre-line">{message.text}</p>
                            <span className="text-xs opacity-70 mt-1 block">
                              {message.timestamp.toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Bot size={16} />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Section - This stays visible after sending messages */}
                <div className="p-4 border-t bg-background">
                  {/* WhatsApp CTA */}
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-whatsapp hover:bg-whatsapp/90 mb-3 gap-2"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </Button>

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
                      disabled={loading}
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      size="icon"
                      disabled={loading || !inputValue.trim()}
                    >
                      <Send size={16} />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default GeminiChat;
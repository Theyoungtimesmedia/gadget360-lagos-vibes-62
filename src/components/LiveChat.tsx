import { useState } from "react";
import { MessageCircle, X, Send, Bot, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm Gadget Bot. Need help ordering? Type 'Order' or 'WhatsApp' to speak to a human.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("order") || message.includes("whatsapp") || message.includes("agent") || message.includes("human")) {
      return "Let me connect you with our sales team! Click the WhatsApp button below to speak with a human agent who can help with your order.";
    }
    
    if (message.includes("hours") || message.includes("time") || message.includes("open")) {
      return "🕒 Our store hours are Monday - Saturday: 9:00 AM - 7:00 PM. We're closed on Sundays. You can WhatsApp us anytime for quick responses!";
    }
    
    if (message.includes("delivery") || message.includes("shipping") || message.includes("location")) {
      return "🚛 We deliver nationwide! Free delivery within Lagos. Delivery takes 1-3 days in Lagos, 3-7 days for other states. Delivery fees start from ₦2,000 outside Lagos.";
    }
    
    if (message.includes("warranty") || message.includes("guarantee")) {
      return "🛡️ We provide warranty on applicable products. New items come with manufacturer warranty. UK used items have 3-month warranty. WhatsApp us for specific warranty details!";
    }
    
    if (message.includes("price") || message.includes("cost") || message.includes("₦")) {
      return "💰 Our prices are competitive and updated daily. For current prices and availability, please WhatsApp us or browse our product catalog. We also offer trade-in deals!";
    }
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! 😊 Welcome to Gadget360.ng. I can help you with store hours, delivery info, warranty details, or connect you with our sales team. How can I assist you today?";
    }
    
    return "I can help you with:\n• Store hours & locations\n• Delivery areas & fees\n• Warranty information\n• Connect you to our sales team\n\nType 'WhatsApp' to speak with a human agent or ask me about any of the above topics!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-whatsapp hover:bg-whatsapp/90 shadow-elegant z-50 animate-pulse"
          size="icon"
        >
          <MessageCircle size={24} />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] shadow-elegant border-accent/20 backdrop-blur-sm bg-card/95 z-50 flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <CardTitle className="text-lg">Gadget Bot</CardTitle>
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
              Online now • Usually replies in minutes
            </p>
          </CardHeader>

          <CardContent className="flex-1 p-0 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 text-sm ${
                      message.isBot
                        ? "bg-muted text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="p-4 border-t">
                <a 
                href="https://wa.me/2347067894474" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 mb-3">
                  <img src="/social-icons/whatsapp.png" className="w-4 h-4 mr-2" alt="WhatsApp" />
                  <MessageCircle className="mr-2" size={16} />
                  Chat on WhatsApp
                  <ExternalLink className="ml-2" size={14} />
                </Button>
              </a>

              {/* Message Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default LiveChat;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant de Philippe Simo. Comment puis-je vous aider aujourd'hui ? Vous pouvez me poser des questions sur l'entrepreneuriat, les investissements en Afrique, ou prendre rendez-vous avec Philippe.",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user" as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response (replace with actual AI integration when Supabase is connected)
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot" as const,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("rendez-vous") || input.includes("rdv") || input.includes("contact")) {
      return "Je peux vous aider à prendre rendez-vous avec Philippe ! Vous pouvez utiliser son lien Calendly ou remplir le formulaire de contact. Préférez-vous une consultation gratuite de 30 minutes ou avez-vous un projet spécifique à discuter ?";
    }
    
    if (input.includes("investir") || input.includes("investissement")) {
      return "Philippe accompagne les entrepreneurs dans leurs stratégies d'investissement en Afrique. Il propose des formations sur 'Investir au Pays' et partage ses conseils via ses podcasts et vidéos. Souhaitez-vous en savoir plus sur ses formations ?";
    }
    
    if (input.includes("formation") || input.includes("apprendre")) {
      return "Philippe propose plusieurs types de formations : entrepreneuriat, stratégies d'investissement, et mentorat personnalisé. Vous pouvez découvrir ses contenus via ses podcasts et vidéos YouTube. Quel domaine vous intéresse le plus ?";
    }
    
    if (input.includes("afrique") || input.includes("cameroun")) {
      return "Philippe Simo est originaire du Cameroun et se spécialise dans l'accompagnement de la diaspora africaine. Il aide à créer des ponts entre l'Afrique et ses communautés internationales. Avez-vous un projet spécifique en Afrique ?";
    }

    return "C'est une excellente question ! Philippe serait ravi de vous répondre personnellement. Je vous recommande de prendre rendez-vous avec lui via Calendly ou de lui envoyer un message direct. Puis-je vous aider à le contacter ?";
  };

  const quickActions = [
    {
      text: "Prendre rendez-vous",
      action: () => {
        const element = document.querySelector("#contact");
        element?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      text: "Voir les formations",
      action: () => {
        const element = document.querySelector("#podcasts");
        element?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      text: "Découvrir le parcours",
      action: () => {
        const element = document.querySelector("#about");
        element?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  ];

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-[var(--shadow-elegant)] transition-all duration-300 ${
            isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96">
          <Card className="shadow-2xl border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Assistant Philippe</CardTitle>
                    <p className="text-sm text-primary-foreground/80">En ligne</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-64 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="px-4 py-2 border-t">
                <p className="text-xs text-muted-foreground mb-2">Actions rapides :</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={action.action}
                      className="text-xs h-7"
                    >
                      {action.text}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Tapez votre message..."
                    className="flex-1 h-9"
                  />
                  <Button type="submit" size="sm" className="h-9 px-3">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Notice */}
          <div className="mt-2 text-center">
            <p className="text-xs text-muted-foreground">
              ⚠️ Chatbot de démonstration - Connectez Supabase pour l'IA complète
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotWidget;
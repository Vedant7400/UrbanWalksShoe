
import React, { useState, useRef, useEffect } from "react";
import { SendHorizontal, User, Bot, ShoppingCart, Truck, HelpCircle, Zap, Star, Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { v4 as uuidv4 } from "@/utils/uuid";
import { getFilteredProducts } from "@/services/data";
import { ChatMessage } from "@/types";
import { Link } from "react-router-dom";

const initialMessages: ChatMessage[] = [
  {
    id: "welcome-1",
    content: "Hello! Welcome to UrbanWalks. How can I assist you with your shoe shopping today?",
    role: "assistant",
    timestamp: new Date(),
  },
];

// Suggestion categories
const suggestionsMap = {
  initial: [
    { id: "shipping", text: "Shipping Info", icon: <Truck className="h-3 w-3 mr-1" /> },
    { id: "suggest_shoe", text: "Suggest a Shoe", icon: <Zap className="h-3 w-3 mr-1" /> },
    { id: "returns", text: "Returns & Exchanges", icon: <ShoppingCart className="h-3 w-3 mr-1" /> },
    { id: "sizing", text: "Sizing Help", icon: <HelpCircle className="h-3 w-3 mr-1" /> },
  ],
  shoe_type: [
    { id: "running", text: "Running", icon: <Zap className="h-3 w-3 mr-1" /> },
    { id: "casual", text: "Casual", icon: <Heart className="h-3 w-3 mr-1" /> },
    { id: "athletic", text: "Athletic", icon: <Star className="h-3 w-3 mr-1" /> },
    { id: "back", text: "Back to Main", icon: <HelpCircle className="h-3 w-3 mr-1" /> },
  ],
  contact: [
    { id: "email", text: "Email Us", icon: <Mail className="h-3 w-3 mr-1" /> },
    { id: "call", text: "Call Us", icon: <HelpCircle className="h-3 w-3 mr-1" /> },
    { id: "back", text: "Back to Main", icon: <HelpCircle className="h-3 w-3 mr-1" /> },
  ]
};

// Chat response database
const chatResponses = {
  // Product Questions
  sizes: "We offer shoes in all standard Indian and international sizes. Most of our adult shoes range from UK 6 to UK 12, and our kids' shoes from UK 3 to UK 5. You can find size charts on individual product pages.",
  kids: "Yes, we have a wide range of kids' shoes! We offer options for toddlers, children, and teenagers in various styles including casual, sports, and school shoes. Check out our Kids section.",
  slip_resistant: "Many of our work and casual shoes feature slip-resistant outsoles. Look for the 'Slip-Resistant' or 'Non-Slip' tag in the product description for confirmation.",
  reviews: "Yes, you can find authentic customer reviews on each product page. We display verified purchase reviews with ratings and detailed feedback.",
  eco_friendly: "Yes, we offer a collection of eco-friendly and vegan shoes. These are made from sustainable materials like recycled plastic, organic cotton, and plant-based leather alternatives.",
  running_vs_walking: "Running shoes typically have more cushioning, especially in the heel, and are designed for forward motion. Walking shoes prioritize stability and have less cushioning but better arch support. Our staff can help you choose the right one for your needs.",
  accessories: "Yes, we sell shoe accessories including replacement laces, insoles, shoe care kits, socks, and shoe deodorizers.",
  washable: "Some of our casual and athletic shoes are machine washable. Check the product description or care instructions. We generally recommend removing insoles and laces, using a gentle cycle with cold water, and air drying.",
  arch_support: "Many of our shoes include built-in arch support. Our orthopedic and comfort lines are specially designed for superior arch support. Use the 'Arch Support' filter when browsing to find these options.",
  lightweight: "Yes, our athletic and casual collections include many lightweight options, especially our running and training shoes that use modern foam technologies.",
  
  // Pricing & Discounts
  promotions: "We regularly offer seasonal sales, festival discounts, and special promotions. Currently, we have a monsoon sale with up to 40% off selected styles. Join our newsletter to stay updated on promotions.",
  discount_codes: "You can use only one discount code per order. However, some ongoing sales can be combined with loyalty points redemption.",
  special_discounts: "Yes, we offer a 10% discount for students and 15% for military personnel with valid ID. These offers are available in-store and online after verification.",
  price_match: "We have a price match guarantee. If you find the same product at a lower price from an authorized retailer within 14 days of purchase, we'll refund the difference.",
  best_deals: "Check our 'Sale' section regularly, subscribe to our newsletter, and follow us on social media for flash sales. Our clearance section often has the best deals with up to 70% off.",
  
  // Shipping & Delivery
  shipping_time: "Standard shipping within India takes 3-5 business days. Express shipping is available for 1-2 business day delivery in major cities. Remote locations may require additional time.",
  same_day: "We offer same-day delivery in select major cities for orders placed before 12 PM. Check if your pincode is eligible during checkout.",
  order_tracking: "Yes, you can track your order through your account dashboard or via the tracking link sent in your shipping confirmation email.",
  international: "Yes, we ship to over 30 countries worldwide. International shipping typically takes 7-14 business days depending on the destination. Additional customs duties may apply.",
  delayed_package: "If your package is delayed, please check the tracking information first. If it shows unusual delays, contact our customer service team with your order number, and we'll investigate the status for you.",
  
  // Returns & Exchanges
  return_policy: "We offer a 30-day return policy for unworn shoes in original packaging with receipt. Returns can be initiated online or in-store. Store credit, exchanges, or refunds to original payment method are available.",
  size_exchange: "To exchange for a different size, initiate a return through your account and select 'Exchange' as the reason. You can immediately place a new order, or wait for the return to be processed first without paying again.",
  worn_shoes: "Unfortunately, we cannot accept returns for worn shoes unless they're defective. We recommend trying shoes indoors on clean surfaces before wearing them outside.",
  free_returns: "Yes, we offer free returns for all full-price items. For sale items, a small return shipping fee of ₹100 may apply unless the item is defective.",
  refund_time: "Refunds typically take 5-7 business days to appear in your account after we receive and process your return. Store credits are issued immediately upon return approval.",
  
  // Customization & Personalization
  customize: "Yes, we offer customization options for select premium models. You can choose colors, materials, and add monograms. Visit our 'Custom Shop' section to explore options.",
  engraving: "We offer engraving and initials on select leather shoes and boots. This service costs ₹500 and takes an additional 3-5 business days for processing.",
  special_design: "We can accommodate special design or color requests for bulk orders (10+ pairs). Individual custom designs may be possible for our premium line - please contact customer service for details.",
  limited_edition: "Yes, we regularly release limited edition collections and exclusive collaborations with designers and artists. Join our VIP list to get early access to these releases.",
  custom_care: "For custom shoes, we recommend specialized care based on the materials used. Most custom shoes come with a care kit and instructions. Our staff can provide specific guidance for your customized pair.",
  
  // Account & Orders
  create_account: "You can create an account by clicking 'Sign Up' at the top of the page or during checkout. Provide your email, create a password, and fill in your details to complete registration.",
  guest_checkout: "Yes, you can check out as a guest without creating an account. However, creating an account makes tracking orders, returns, and future purchases easier.",
  reset_password: "Click 'Sign In' at the top of the page, then select 'Forgot Password'. Enter your email address, and we'll send you a link to reset your password.",
  change_order: "You can modify your order within 1 hour of placing it by contacting our customer service team. After that, orders enter processing and cannot be modified.",
  cancel_order: "Orders can be cancelled before they're shipped. Go to your account dashboard, find the order, and click 'Cancel Order'. If the option isn't available, contact customer service immediately.",
  
  // Customer Support & Contact
  contact_service: "You can reach our customer service team via email at support@urbanwalks.com, through live chat on our website, or by calling our toll-free number 1800-123-4567.",
  live_chat: "Yes, we offer live chat support through our website. The chat icon is available in the bottom right corner of every page. It's available from 9 AM to 9 PM IST, seven days a week.",
  service_hours: "Our customer service team is available Monday through Saturday from 9 AM to 9 PM IST, and Sunday from 10 AM to 6 PM IST. During major holidays, hours may be reduced.",
  phone_representative: "Yes, you can speak with a representative by calling our customer service number at 1800-123-4567 during business hours.",
  feedback: "We welcome feedback! You can leave a product review after purchase, fill out our customer satisfaction survey sent via email, or contact our customer service team directly with your feedback.",
  
  // Shoe Care & Maintenance
  clean_suede: "For suede shoes, use a suede brush to remove dirt, then a specialized suede cleaner for stains. Always allow them to dry naturally away from direct heat, and use a suede protector spray regularly.",
  store_leather: "Store leather shoes with shoe trees inside to maintain their shape. Keep them in a cool, dry place away from direct sunlight. Apply leather conditioner occasionally to prevent cracking.",
  cleaning_kits: "Yes, we sell shoe cleaning kits for various materials including leather, suede, canvas, and athletic shoes. These kits include appropriate cleaners, brushes, and protection products.",
  remove_odor: "To remove odor, try sprinkling baking soda inside your shoes and leaving overnight, then vacuum it out. We also sell specialized deodorizing sprays and cedar shoe fresheners.",
  repair_soles: "We offer resoling services for most leather shoes and boots at our flagship stores. Alternatively, we can recommend trusted local cobblers who can repair worn-out soles.",
  
  // Miscellaneous
  loyalty_program: "Yes, we have a loyalty program called 'UrbanWalks Rewards'. You earn points with every purchase that can be redeemed for discounts. Members also get early access to sales and exclusive offers.",
  back_in_stock: "You can click the 'Notify Me' button on any out-of-stock product page. We'll send you an email when the item is restocked in your size.",
  influencer_program: "We have an affiliate program for influencers and content creators. Partners receive custom discount codes and earn commission on sales. Apply through the 'Partners' section of our website.",
  physical_store: "Yes, we have physical stores in major cities across India. You can use our 'Store Locator' tool on the website to find the nearest location where you can try on shoes.",
  pre_order: "Yes, for selected new releases and collections, we offer pre-orders. Pre-ordered items are typically shipped 2-3 days before the official release date."
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState<string>("initial");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleShoeRecommendation = () => {
    const randomProducts = getFilteredProducts({}).sort(() => 0.5 - Math.random()).slice(0, 3);
    
    let message = "Based on the latest trends and your interests, here are some shoes you might like:\n\n";
    
    randomProducts.forEach((product, index) => {
      message += `${index + 1}. **${product.name}** by ${product.brand} - $${product.price}\n`;
    });
    
    message += "\nYou can click on any of these recommendations to view more details.";
    
    const botResponse: ChatMessage = {
      id: uuidv4(),
      content: message,
      role: "assistant",
      timestamp: new Date(),
      products: randomProducts,
    };
    
    setMessages((prev) => [...prev, botResponse]);
  };

  const handleSuggestionClick = (suggestionId: string) => {
    let userMessage: ChatMessage = {
      id: uuidv4(),
      content: "",
      role: "user",
      timestamp: new Date(),
    };

    let responseContent = "";

    switch (suggestionId) {
      case "shipping":
        userMessage.content = "Tell me about shipping options";
        responseContent = chatResponses.shipping_time;
        setCurrentSuggestions("initial");
        break;
      case "suggest_shoe":
        userMessage.content = "Can you suggest a shoe for me?";
        setCurrentSuggestions("shoe_type");
        responseContent = "I'd be happy to suggest some shoes! What type of shoes are you looking for?";
        break;
      case "returns":
        userMessage.content = "What's your return policy?";
        responseContent = chatResponses.return_policy;
        setCurrentSuggestions("initial");
        break;
      case "sizing":
        userMessage.content = "How do I find my correct size?";
        responseContent = chatResponses.sizes;
        setCurrentSuggestions("initial");
        break;
      case "running":
      case "casual":
      case "athletic":
        userMessage.content = `I'm looking for ${suggestionId} shoes`;
        handleShoeRecommendation();
        setCurrentSuggestions("initial");
        return;
      case "back":
        setCurrentSuggestions("initial");
        return;
      case "email":
        userMessage.content = "How can I contact support via email?";
        responseContent = "You can reach our support team at support@urbanwalks.com. We typically respond within 24 hours.";
        setCurrentSuggestions("initial");
        break;
      case "call":
        userMessage.content = "What's your customer service phone number?";
        responseContent = "You can reach our customer service team at 1-800-555-WALK (9255). Our representatives are available Monday through Friday, 9 AM to 7 PM Eastern Time.";
        setCurrentSuggestions("initial");
        break;
      default:
        return;
    }

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      if (responseContent) {
        const botResponse: ChatMessage = {
          id: uuidv4(),
          content: responseContent,
          role: "assistant",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      }
    }, 600);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage: ChatMessage = {
      id: uuidv4(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Process user query and find appropriate response
    setTimeout(() => {
      let responseContent = "";
      const userQuestion = input.toLowerCase();
      
      // Check for keywords and match to responses
      if (userQuestion.includes("size") || userQuestion.includes("available size")) {
        responseContent = chatResponses.sizes;
      } else if (userQuestion.includes("kids") || userQuestion.includes("children")) {
        responseContent = chatResponses.kids;
      } else if (userQuestion.includes("slip") || userQuestion.includes("resistant")) {
        responseContent = chatResponses.slip_resistant;
      } else if (userQuestion.includes("review") || userQuestion.includes("feedback")) {
        responseContent = chatResponses.reviews;
      } else if (userQuestion.includes("eco") || userQuestion.includes("vegan") || userQuestion.includes("sustainable")) {
        responseContent = chatResponses.eco_friendly;
      } else if (userQuestion.includes("difference between running") || userQuestion.includes("running vs walking")) {
        responseContent = chatResponses.running_vs_walking;
      } else if (userQuestion.includes("accessories") || userQuestion.includes("laces") || userQuestion.includes("insole")) {
        responseContent = chatResponses.accessories;
      } else if (userQuestion.includes("wash") || userQuestion.includes("machine washable")) {
        responseContent = chatResponses.washable;
      } else if (userQuestion.includes("arch support")) {
        responseContent = chatResponses.arch_support;
      } else if (userQuestion.includes("lightweight")) {
        responseContent = chatResponses.lightweight;
      } else if (userQuestion.includes("sale") || userQuestion.includes("promotion") || userQuestion.includes("discount")) {
        responseContent = chatResponses.promotions;
      } else if (userQuestion.includes("discount code") || userQuestion.includes("coupon")) {
        responseContent = chatResponses.discount_codes;
      } else if (userQuestion.includes("student") || userQuestion.includes("military")) {
        responseContent = chatResponses.special_discounts;
      } else if (userQuestion.includes("price match")) {
        responseContent = chatResponses.price_match;
      } else if (userQuestion.includes("best deal") || userQuestion.includes("cheapest")) {
        responseContent = chatResponses.best_deals;
      } else if (userQuestion.includes("shipping") || userQuestion.includes("delivery time")) {
        responseContent = chatResponses.shipping_time;
      } else if (userQuestion.includes("same day") || userQuestion.includes("today")) {
        responseContent = chatResponses.same_day;
      } else if (userQuestion.includes("track") || userQuestion.includes("where is my order")) {
        responseContent = chatResponses.order_tracking;
      } else if (userQuestion.includes("international") || userQuestion.includes("abroad")) {
        responseContent = chatResponses.international;
      } else if (userQuestion.includes("delayed") || userQuestion.includes("late delivery")) {
        responseContent = chatResponses.delayed_package;
      } else if (userQuestion.includes("return policy")) {
        responseContent = chatResponses.return_policy;
      } else if (userQuestion.includes("exchange") || userQuestion.includes("different size")) {
        responseContent = chatResponses.size_exchange;
      } else if (userQuestion.includes("worn shoes") || userQuestion.includes("after wearing")) {
        responseContent = chatResponses.worn_shoes;
      } else if (userQuestion.includes("free return")) {
        responseContent = chatResponses.free_returns;
      } else if (userQuestion.includes("refund time") || userQuestion.includes("money back")) {
        responseContent = chatResponses.refund_time;
      } else if (userQuestion.includes("customize") || userQuestion.includes("custom shoes")) {
        responseContent = chatResponses.customize;
      } else if (userQuestion.includes("engrav") || userQuestion.includes("initial")) {
        responseContent = chatResponses.engraving;
      } else if (userQuestion.includes("special design") || userQuestion.includes("specific color")) {
        responseContent = chatResponses.special_design;
      } else if (userQuestion.includes("limited edition") || userQuestion.includes("exclusive")) {
        responseContent = chatResponses.limited_edition;
      } else if (userQuestion.includes("clean custom") || userQuestion.includes("custom care")) {
        responseContent = chatResponses.custom_care;
      } else if (userQuestion.includes("create account") || userQuestion.includes("sign up")) {
        responseContent = chatResponses.create_account;
      } else if (userQuestion.includes("guest") || userQuestion.includes("without account")) {
        responseContent = chatResponses.guest_checkout;
      } else if (userQuestion.includes("reset password") || userQuestion.includes("forgot password")) {
        responseContent = chatResponses.reset_password;
      } else if (userQuestion.includes("change order") || userQuestion.includes("modify order")) {
        responseContent = chatResponses.change_order;
      } else if (userQuestion.includes("cancel order")) {
        responseContent = chatResponses.cancel_order;
      } else if (userQuestion.includes("contact") || userQuestion.includes("customer service")) {
        responseContent = chatResponses.contact_service;
        setCurrentSuggestions("contact");
      } else if (userQuestion.includes("live chat") || userQuestion.includes("chat support")) {
        responseContent = chatResponses.live_chat;
      } else if (userQuestion.includes("service hours") || userQuestion.includes("support hours")) {
        responseContent = chatResponses.service_hours;
      } else if (userQuestion.includes("phone") || userQuestion.includes("call")) {
        responseContent = chatResponses.phone_representative;
      } else if (userQuestion.includes("feedback") || userQuestion.includes("suggestion")) {
        responseContent = chatResponses.feedback;
      } else if (userQuestion.includes("clean suede") || userQuestion.includes("suede shoes")) {
        responseContent = chatResponses.clean_suede;
      } else if (userQuestion.includes("store leather") || userQuestion.includes("leather care")) {
        responseContent = chatResponses.store_leather;
      } else if (userQuestion.includes("cleaning kit") || userQuestion.includes("shoe cleaner")) {
        responseContent = chatResponses.cleaning_kits;
      } else if (userQuestion.includes("odor") || userQuestion.includes("smell")) {
        responseContent = chatResponses.remove_odor;
      } else if (userQuestion.includes("repair") || userQuestion.includes("worn sole")) {
        responseContent = chatResponses.repair_soles;
      } else if (userQuestion.includes("loyalty") || userQuestion.includes("rewards")) {
        responseContent = chatResponses.loyalty_program;
      } else if (userQuestion.includes("back in stock") || userQuestion.includes("restock")) {
        responseContent = chatResponses.back_in_stock;
      } else if (userQuestion.includes("influencer") || userQuestion.includes("affiliate")) {
        responseContent = chatResponses.influencer_program;
      } else if (userQuestion.includes("physical store") || userQuestion.includes("try on")) {
        responseContent = chatResponses.physical_store;
      } else if (userQuestion.includes("pre-order") || userQuestion.includes("upcoming")) {
        responseContent = chatResponses.pre_order;
      } else if (userQuestion.includes("suggest") || userQuestion.includes("recommendation")) {
        handleShoeRecommendation();
        setIsLoading(false);
        return;
      } else if (userQuestion.includes("urbanwalks") || userQuestion.includes("about the company")) {
        responseContent = "UrbanWalks was founded in 2025 by Vedant Mahajan and Aditya Khankar. We are a premium footwear retailer specializing in comfortable, stylish shoes for men, women, and children. Our team includes Girish Londe (Head of Operations) and Hrushikesh Bhoir (Customer Support Lead).";
      } else if (userQuestion.includes("founder") || userQuestion.includes("ceo") || userQuestion.includes("owner")) {
        responseContent = "UrbanWalks was founded by Vedant Mahajan and Aditya Khankar in 2025. They currently serve as the CEO and Co-CEO of the company.";
      } else if (userQuestion.includes("team members") || userQuestion.includes("who works")) {
        responseContent = "Our leadership team includes Vedant Mahajan (CEO), Aditya Khankar (Co-CEO), Girish Londe (Head of Operations), and Hrushikesh Bhoir (Customer Support Lead).";
      } else if (userQuestion.includes("price") || userQuestion.includes("cost")) {
        responseContent = "Our shoes are priced in Indian Rupees (₹). Prices range from ₹1,500 for basic styles to ₹25,000 for premium and limited edition models.";
      } else if (userQuestion.includes("currency") || userQuestion.includes("rupees")) {
        responseContent = "All prices on UrbanWalks are listed in Indian Rupees (₹).";
      } else {
        // Default responses if no specific match is found
        const defaultResponses = [
          "I'd be happy to help you with that. Could you provide a bit more detail about what you're looking for?",
          "That's a great question about our shoes. Let me find the information for you.",
          "I can definitely assist with your inquiry. Let me know if you need more specific information.",
          "Thanks for your question. We have a wide range of options that might meet your needs.",
          "I'm here to help with any questions about our shoes. Could you be a bit more specific?",
          "We have many styles that might interest you. Can you tell me more about what you're looking for?",
          "At UrbanWalks, we pride ourselves on our selection and quality. Let me help you find the perfect pair.",
          "I'd be happy to provide information about our shoes. What specific details are you interested in?",
          "Thank you for contacting UrbanWalks support. How else can I assist you with your shoe shopping today?"
        ];
        responseContent = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      }

      const botResponse: ChatMessage = {
        id: uuidv4(),
        content: responseContent,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const formatMessage = (content: string) => {
    // Process markdown bold (**text**)
    const boldPattern = /\*\*(.*?)\*\*/g;
    const processedContent = content.replace(boldPattern, '<strong>$1</strong>');
    
    // Split by newlines and process
    return processedContent.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        <span dangerouslySetInnerHTML={{ __html: line }} />
        {i < processedContent.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <Card className="shadow-xl border overflow-hidden chatbot-container bg-white/95 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-brand-purple to-brand-blue text-white p-4">
        <CardTitle className="text-center flex items-center justify-center">
          <Bot className="mr-2 h-5 w-5" />
          SneakChat Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[420px] overflow-y-auto p-4 bg-gray-50/80">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-4 py-2 ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-md"
                    : "bg-white border shadow-sm"
                }`}
              >
                <div className="flex items-start">
                  {message.role === "assistant" && (
                    <Bot className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-sm">{formatMessage(message.content)}</p>
                    
                    {message.products && (
                      <div className="mt-3 grid grid-cols-1 gap-2">
                        {message.products.map(product => (
                          <Link 
                            key={product.id} 
                            to={`/product/${product.id}`}
                            className="flex items-center p-2 border rounded-lg bg-brand-purple/5 hover:bg-brand-purple/10 transition-colors"
                          >
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-12 h-12 object-contain mr-3"
                            />
                            <div>
                              <div className="font-medium text-sm">{product.name}</div>
                              <div className="text-xs text-gray-600">${product.price}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  {message.role === "user" && (
                    <User className="h-5 w-5 ml-2 mt-1 flex-shrink-0" />
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border shadow-sm max-w-[80%] rounded-lg px-4 py-2">
                <div className="flex items-center">
                  <Bot className="h-5 w-5 mr-2 flex-shrink-0" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-brand-purple animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-brand-purple animate-bounce delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-brand-purple animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Suggestions */}
          {!isLoading && (
            <div className="mt-4 flex flex-wrap gap-2">
              {suggestionsMap[currentSuggestions as keyof typeof suggestionsMap].map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion.id)}
                  className="chat-suggestion"
                >
                  {suggestion.icon}
                  {suggestion.text}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="p-3 border-t">
        <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
          <Input
            placeholder="Ask about our shoes..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-xl border-brand-purple/30 focus-visible:ring-brand-purple"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 rounded-xl" disabled={isLoading}>
            <SendHorizontal className="h-5 w-5" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default Chatbot;

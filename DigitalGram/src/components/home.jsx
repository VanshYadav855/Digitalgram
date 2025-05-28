export default services;
// export default portfolio;
// export default testimonials;
// export default stats;
// export default socialPlatforms;

const services = [
    {
      icon: Instagram,
      title: "Instagram Marketing",
      description: "Grow your Instagram presence with engaging content, Stories, Reels, and targeted advertising campaigns.",
      features: ["Content Creation", "Story Design", "Reels Production", "Instagram Ads"]
    },
    {
      icon: Facebook,
      title: "Facebook Advertising",
      description: "Reach your ideal audience with precision-targeted Facebook and Meta advertising campaigns.",
      features: ["Ad Campaign Setup", "Audience Targeting", "Creative Design", "Performance Optimization"]
    },
    {
      icon: Twitter,
      title: "Twitter Management",
      description: "Build thought leadership and engage with your community through strategic Twitter content.",
      features: ["Tweet Scheduling", "Community Management", "Twitter Ads", "Trend Analysis"]
    },
    {
      icon: Youtube,
      title: "YouTube Growth",
      description: "Scale your YouTube channel with optimized content, thumbnails, and strategic promotion.",
      features: ["Video Optimization", "Thumbnail Design", "Channel Growth", "YouTube Ads"]
    }
  ];

  const portfolio = [
    {
      title: "Fashion Brand Growth",
      category: "Instagram",
      result: "500K Followers",
      metric: "250% Growth",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Restaurant Chain",
      category: "Facebook Ads",
      result: "$2M Revenue",
      metric: "400% ROAS",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Tech Startup Launch",
      category: "Multi-Platform",
      result: "1M+ Impressions",
      metric: "15% Engagement",
      image: "/api/placeholder/400/300"
    }
  ];


  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "StyleBoutique",
      role: "Brand Manager",
      text: "DigitalGram transformed our Instagram presence completely. We went from 10K to 500K followers in just 8 months with authentic engagement.",
      rating: 5,
      platform: "Instagram"
    },
    {
      name: "David Chen",
      company: "FoodieChain",
      role: "Marketing Director",
      text: "Their Facebook advertising strategy delivered incredible results. We achieved 400% ROAS and expanded to 5 new cities.",
      rating: 5,
      platform: "Facebook"
    },
    {
      name: "Sarah Williams",
      company: "TechInnovate",
      role: "CEO",
      text: "Professional, creative, and results-driven. DigitalGram helped us build a strong social media foundation from scratch.",
      rating: 5,
      platform: "Multi-Platform"
    }
  ];

  const stats = [
    { number: "2M+", label: "Followers Generated" },
    { number: "150+", label: "Brands Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "500%", label: "Average Growth" }
  ];

  const socialPlatforms = [
    { icon: Instagram, name: "Instagram", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", color: "text-blue-400" },
    { icon: Youtube, name: "YouTube", color: "text-red-500" }
  ];
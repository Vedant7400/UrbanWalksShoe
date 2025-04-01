
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-12">About UrbanWalks</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Shoe store" 
              className="w-full h-80 object-cover rounded-lg shadow-md mb-8"
            />
            
            <div className="prose lg:prose-xl max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4 text-gray-700">
                UrbanWalks began in 2025 with a simple mission: to provide high-quality, comfortable, and stylish footwear for everyone. 
                What started as a small boutique in downtown Footwear City has now grown into one of the country's premier 
                destinations for shoes of all types.
              </p>
              <p className="mb-4 text-gray-700">
                Our founders, Vedant Mahajan and Aditya Khankar, recognized the importance of proper footwear in both 
                performance and everyday comfort. After experiencing frustration with the limited options available in the market, 
                they decided to create a store that would offer a curated selection of the best shoes from around the world.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-2">Quality</h3>
                  <p className="text-gray-600">
                    We source only the finest materials and partner with manufacturers who share our commitment to craftsmanship.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                  <p className="text-gray-600">
                    We're committed to reducing our environmental footprint through eco-friendly practices and partnerships.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-2">Customer First</h3>
                  <p className="text-gray-600">
                    Your satisfaction is our priority. We offer exceptional service and stand behind every product we sell.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <p className="mb-6 text-gray-700">
              UrbanWalks is powered by a diverse team of footwear enthusiasts, design experts, and customer service specialists who 
              share a passion for helping people find their perfect pair.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-medium">Vedant Mahajan</h3>
                <p className="text-gray-600">CEO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-medium">Aditya Khankar</h3>
                <p className="text-gray-600">Co-CEO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-medium">Girish Londe</h3>
                <p className="text-gray-600">Head of Operations</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-medium">Hrushikesh Bhoir</h3>
                <p className="text-gray-600">Customer Support Lead</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Visit Us</h2>
            <p className="mb-6 text-gray-700">
              We invite you to visit our flagship store or any of our branch locations to experience the UrbanWalks difference in person. 
              Our knowledgeable staff is always ready to help you find the perfect fit.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-gray-100 p-6 rounded-lg md:w-1/2">
                <h3 className="font-medium mb-2">Flagship Store</h3>
                <p className="text-gray-700">
                  Pillai College, Panvel<br />
                  Navi Mumbai, Maharashtra<br />
                  India
                </p>
                <p className="mt-2 text-gray-700">
                  <span className="font-medium">Hours:</span> Monday - Saturday: 10am - 8pm, Sunday: 12pm - 6pm
                </p>
              </div>
              
              <div className="md:w-1/2 h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.669832666315!2d73.12533561492635!3d18.990149987135374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e866de88b6e7%3A0xc1c5d5c482444cfd!2sPillai%20College%20of%20Engineering%2C%20New%20Panvel!5e0!3m2!1sen!2sin!4v1654851192948!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

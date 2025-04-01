
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { dispatch } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "User Name",
    email: "",
    phone: "+91 9876543210",
    address: "Pillai College, Panvel, India"
  });

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("userLoggedIn") === "true";
    const userEmail = localStorage.getItem("userEmail");
    
    if (loggedIn && userEmail) {
      setIsLoggedIn(true);
      setUser(prev => ({
        ...prev,
        email: userEmail,
        name: userEmail.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
      }));
    } else {
      // Redirect to login if not logged in
      navigate("/signin");
    }
  }, [navigate]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock profile update
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile updated successfully",
        description: "Your profile information has been updated.",
      });
    }, 1000);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock password update
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Password updated successfully",
        description: "Your password has been updated.",
      });
    }, 1000);
  };

  const handleLogout = () => {
    // Clear the user data from local storage
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("userEmail");
    
    // Clear the cart
    dispatch({ type: "CLEAR_CART" });
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    
    // Redirect to home page
    navigate("/");
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container mx-auto py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">You are not logged in</h1>
          <p className="mb-6">Please sign in to view your profile</p>
          <Button onClick={() => navigate("/signin")}>Sign In</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-brand-purple/10 rounded-full mb-4 flex items-center justify-center text-brand-purple">
                    <span className="text-4xl font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => navigate("/orders")}
                  >
                    My Orders
                  </Button>
                  <Button 
                    variant="outline" 
                    className="mt-2 w-full"
                    onClick={() => navigate("/wishlist")}
                  >
                    Wishlist
                  </Button>
                  <Button 
                    variant="destructive" 
                    className="mt-4 w-full"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="profile">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">Profile Information</TabsTrigger>
                <TabsTrigger value="security">Security Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your personal information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          value={user.name}
                          onChange={(e) => setUser({...user, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={user.email}
                          onChange={(e) => setUser({...user, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          value={user.phone}
                          onChange={(e) => setUser({...user, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input 
                          id="address" 
                          value={user.address}
                          onChange={(e) => setUser({...user, address: e.target.value})}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full mt-4 bg-brand-purple hover:bg-brand-purple/90" 
                        disabled={isLoading}
                      >
                        {isLoading ? "Updating..." : "Update Profile"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Update your password and security preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUpdatePassword} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input 
                          id="current-password" 
                          type="password"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input 
                          id="new-password" 
                          type="password"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input 
                          id="confirm-password" 
                          type="password"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full mt-4 bg-brand-purple hover:bg-brand-purple/90" 
                        disabled={isLoading}
                      >
                        {isLoading ? "Updating..." : "Update Password"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

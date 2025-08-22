import React from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';

const ProfilePage = () => {
  return (
    <Tabs defaultValue="general" className="space-y-4">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="company">Company</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-4">
        <Card className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold">Profile Picture</h2>
              <p className="text-sm text-gray-500 mb-2">Update your profile photo</p>
              <Button variant="outline">Change Photo</Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Adam" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Smith" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="adam@logistics.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+233 20 123 4567" />
            </div>
            <Button>Save Changes</Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="company" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Company Information</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" defaultValue="Adam Logistics Ltd" />
            </div>
            <div>
              <Label htmlFor="registration">Registration Number</Label>
              <Input id="registration" defaultValue="REG123456" />
            </div>
            <div>
              <Label htmlFor="address">Company Address</Label>
              <Input id="address" defaultValue="123 Business Street, Accra" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" defaultValue="Accra" />
              </div>
              <div>
                <Label htmlFor="region">Region</Label>
                <Input id="region" defaultValue="Greater Accra" />
              </div>
            </div>
            <Button>Update Company Info</Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="settings" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Notifications</Label>
                <p className="text-sm text-gray-500">Receive email updates about your shipments</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>SMS Notifications</Label>
                <p className="text-sm text-gray-500">Get SMS alerts for important updates</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            <Button>Update Password</Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="billing" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                  VISA
                </div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-gray-500">Expires 08/2026</p>
                </div>
              </div>
              <Button variant="outline">Remove</Button>
            </div>
            <Button>Add Payment Method</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="billingAddress">Street Address</Label>
              <Input id="billingAddress" defaultValue="123 Business Street" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="billingCity">City</Label>
                <Input id="billingCity" defaultValue="Accra" />
              </div>
              <div>
                <Label htmlFor="billingRegion">Region</Label>
                <Input id="billingRegion" defaultValue="Greater Accra" />
              </div>
            </div>
            <Button>Update Billing Address</Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProfilePage;

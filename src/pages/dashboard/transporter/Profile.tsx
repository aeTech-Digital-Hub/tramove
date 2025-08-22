import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';

const ProfilePage = () => {
  return (
    <Tabs defaultValue="general" className="space-y-4">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="vehicle">Vehicle Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-4">
        <Card className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>FD</AvatarFallback>
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
                <Input id="firstName" defaultValue="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="john@fastdelivery.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+233 20 123 4567" />
            </div>
            <Button>Save Changes</Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="vehicle" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Vehicle Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vehicleType">Vehicle Type</Label>
                <Input id="vehicleType" defaultValue="Cargo Truck" />
              </div>
              <div>
                <Label htmlFor="licensePlate">License Plate</Label>
                <Input id="licensePlate" defaultValue="GH-123-45" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="capacity">Capacity</Label>
                <Input id="capacity" defaultValue="5000 kg" />
              </div>
              <div>
                <Label htmlFor="manufactureYear">Manufacture Year</Label>
                <Input id="manufactureYear" defaultValue="2023" />
              </div>
            </div>
            <div>
              <Label htmlFor="insurance">Insurance Number</Label>
              <Input id="insurance" defaultValue="INS-2023-456789" />
            </div>
            <Button>Update Vehicle Info</Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="settings" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Real-time Location Sharing</Label>
                <p className="text-sm text-gray-500">Share your location during deliveries</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Delivery Notifications</Label>
                <p className="text-sm text-gray-500">Get notified about new delivery requests</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Auto-accept Similar Jobs</Label>
                <p className="text-sm text-gray-500">Automatically accept jobs matching your preferences</p>
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

      <TabsContent value="documents" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Required Documents</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-medium">Driver's License</h3>
                  <p className="text-sm text-gray-500">Expires: 2026-08-15</p>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-medium">Vehicle Registration</h3>
                  <p className="text-sm text-gray-500">Expires: 2025-12-31</p>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-medium">Insurance Certificate</h3>
                  <p className="text-sm text-gray-500">Expires: 2026-01-15</p>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProfilePage;

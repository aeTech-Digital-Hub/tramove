// import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Admin User" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="admin@tramove.com" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" defaultValue="+233 20 123 4567" />
          </div>
          <Button>Update Profile</Button>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Email Notifications</Label>
              <p className="text-sm text-gray-500">Receive notifications via email</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Push Notifications</Label>
              <p className="text-sm text-gray-500">Receive push notifications</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>SMS Notifications</Label>
              <p className="text-sm text-gray-500">Receive notifications via SMS</p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div>
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div>
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Change Password</Button>
        </div>
      </Card>

      {/* Platform Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Platform Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Dark Mode</Label>
              <p className="text-sm text-gray-500">Enable dark mode theme</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-gray-500">Enable 2FA for enhanced security</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;

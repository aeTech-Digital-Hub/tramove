import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HelpPage = () => {
  return (
    <Tabs defaultValue="faq" className="space-y-4">
      <TabsList>
        <TabsTrigger value="faq">FAQ</TabsTrigger>
        <TabsTrigger value="guides">Guides</TabsTrigger>
        <TabsTrigger value="support">Support</TabsTrigger>
      </TabsList>

      <TabsContent value="faq" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">How do I update my vehicle information?</h3>
              <p className="text-gray-600">
                You can update your vehicle information from your profile settings. Navigate to Profile Vehicle Details and click on Edit.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">How are payments processed?</h3>
              <p className="text-gray-600">
                Payments are processed automatically after delivery confirmation. Funds are typically released within 24-48 hours.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">What happens if there's a delay?</h3>
              <p className="text-gray-600">
                If you encounter any delays, update the shipment status immediately through the Manage page. Contact support if the delay is significant.
              </p>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="guides" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Start Guide</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">1. Finding Shipments</h3>
              <p className="text-gray-600">
                Use the Browse page to find available shipments. Filter by distance, weight, and date to find suitable matches.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">2. Placing Bids</h3>
              <p className="text-gray-600">
                Click "Place Bid" on any shipment you're interested in. Consider the distance, cargo size, and delivery timeline when setting your price.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">3. Managing Deliveries</h3>
              <p className="text-gray-600">
                Once your bid is accepted, the shipment will appear in your Manage page. Keep the status updated throughout the delivery process.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Safety Guidelines</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Vehicle Maintenance</h3>
              <p className="text-gray-600">
                Regular vehicle maintenance is crucial. Check fluid levels, tire pressure, and brake condition before each trip.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Cargo Handling</h3>
              <p className="text-gray-600">
                Always secure cargo properly. Use appropriate straps, covers, and containers based on cargo type.
              </p>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="support" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Contact Support</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">24/7 Support Line</h3>
              <p className="text-gray-600">
                Call us anytime at: +233 20 123 4567
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Email Support</h3>
              <p className="text-gray-600">
                Send us an email at: support@tramove.com
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Emergency Assistance</h3>
              <Button variant="destructive">
                Request Emergency Support
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Submit a Ticket</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Brief description of your issue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                className="w-full p-2 border rounded-md h-32"
                placeholder="Provide details about your issue..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Priority</label>
              <select className="w-full p-2 border rounded-md">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>
            <Button>Submit Ticket</Button>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default HelpPage;

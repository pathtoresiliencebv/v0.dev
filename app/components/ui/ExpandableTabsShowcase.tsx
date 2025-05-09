"use client";

import { DefaultDemo, CustomColorDemo } from "@/components/ui/expandable-tabs-demo";

export function ExpandableTabsShowcase() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-8 space-y-12">
      <div className="w-full text-center space-y-4">
        <h1 className="text-4xl font-bold">Expandable Tabs</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tabs that expand to show their labels when clicked, creating a compact and interactive navigation experience.
        </p>
      </div>

      <div className="w-full space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Default</h2>
          <p className="text-muted-foreground">
            The default expandable tabs with primary color styling.
          </p>
          <div className="p-8 border rounded-lg bg-background/50">
            <DefaultDemo />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Custom Color</h2>
          <p className="text-muted-foreground">
            Expandable tabs with custom active color and border styling.
          </p>
          <div className="p-8 border rounded-lg bg-background/50">
            <CustomColorDemo />
          </div>
        </div>
      </div>

      <div className="w-full space-y-4 border-t pt-8">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="bg-muted p-4 rounded-lg">
          <pre className="text-sm overflow-auto">
{`import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Home, Settings, Bell } from "lucide-react";

export function MyComponent() {
  const tabs = [
    { title: "Dashboard", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" },
    { title: "Settings", icon: Settings },
  ];

  return (
    <ExpandableTabs 
      tabs={tabs} 
      onChange={(index) => console.log("Tab changed:", index)}
    />
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
} 
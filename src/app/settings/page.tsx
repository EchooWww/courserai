import SubscriptionButton from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import React from "react";

type Props = {};

const SettingsPage = async (props: Props) => {
  const isPro = await checkSubscription();

  return (
    <div className="py-8 mx-auto max-w-7xl ml-7 flex flex-col items-center justify-center">
      <h3 className="self-center text-4xl font-bold text-center mb-4">
        Settings
      </h3>
      {isPro ? (
        <p className="text-xl text-secondary-foreground/60">
          You are a Pro user!
        </p>
      ) : (
        <p className="text-xl text-secondary-foreground/60">
          You are a free user
        </p>
      )}
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default SettingsPage;

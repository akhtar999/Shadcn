import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>Chai page</div>

      <Button variant="chai" size="sm">
        Shancn Button
      </Button>
    </main>
  );
};

export default page;

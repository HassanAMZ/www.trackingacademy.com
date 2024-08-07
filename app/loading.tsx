// app/components/loading.tsx

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/container";
import Navbar from "@/components/global/navbar";
import Text from "@/components/ui/text";

const Loading: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container className="grid min-h-screen place-content-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>
              <Text as="h3" variant="headingXl">
                Loading
              </Text>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="mb-4 h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
            <CardDescription className="text-center">
              The page is currently loading. Please wait a moment.
            </CardDescription>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Loading;

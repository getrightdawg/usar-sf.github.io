import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black-50 px-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardContent className="pt-8 pb-6 px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <AlertCircle className="h-12 w-12 text-red-500" />
            <h1 className="text-4xl font-extrabold text-red-500">404</h1>
            <h2 className="text-2xl font-bold text-asf-accent">Page Not Found</h2>
            <p className="text-white mt-2">
              Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link href="/">
              <Button className="mt-6 bg-asf-accent text-asf-black px-6 py-3 font-rajdhani font-bold hover:bg-asf-accent-dark hover:scale-105 transition-all duration-300 shadow-lg">
                Go Back Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

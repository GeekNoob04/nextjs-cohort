import React from "react";

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="border-b text-center">Login now to get 20% off</div>
            {children}
        </div>
    );
}

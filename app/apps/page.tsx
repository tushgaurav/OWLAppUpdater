import { App } from "../_components/AppCard/AppCard";
import AppCard from "../_components/AppCard/AppCard";

const apps: App[] = [
    {
        name: "autoSpray",
        description: "AutoSpray is a utility for configuring paint parameters to automate spray painting for profiles.",
        logo: "/apps/autospray_logo.png",
        version: "0.1.0alpha",
        imageUrl: "/apps/autospray_screenshot.png",
    },
    {
        name: "RoboGPT",
        description: "RoboGPT is a utility for generating text using the GPT-3 model.",
        logo: "/apps/robogpt_logo.png",
        version: "0.1.0alpha",
        imageUrl: "/apps/robogpt_screenshot.png",
    }

];

export default function AppsPage() {
    return (
        <main className="">
            <h1 className="heading">Apps</h1>

            <div className="my-6">
                {apps.map((app) => (
                    <AppCard key={app.name} app={app} />
                ))}
            </div>

        </main>
    );
}
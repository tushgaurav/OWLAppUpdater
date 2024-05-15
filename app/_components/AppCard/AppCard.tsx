export type App = {
    name: string;
    description: string;
    logo: string;
    version: string;
    imageUrl: string;
}

export default function AppCard({ app }: { app: App }) {
    return (
        <div style={{
            background: 'linear-gradient(97deg, rgba(52, 47, 47, 0.30) -58.05%, rgba(255, 255, 255, 0.30) 108.51%)'
        }} className="rounded-md p-4 mt-8">
            <div className="flex justify-between">
                <img src={app.logo} alt={app.name} className="h-8 mb-4" />
                <div className="bg-green-700 h-min p-1 rounded-full px-4 font-bold">{app.version}</div>
            </div>

            <div className="flex gap-2 justify-items-center items-center">
                <div>
                    <p className="">{app.description}</p>
                    <div className="flex gap-6 mt-4">
                        <div className="bg-blue-500 p-2 font-bold text-lg rounded-md hover:bg-blue-900">Install Now</div>
                        <div className="bg-yellow-600 p-2 font-bold text-lg rounded-md hover:bg-yellow-900">Check Update</div>
                    </div>
                </div>
                <img src={app.imageUrl} alt="app1" className="w-full mt-4 rounded-md" />
            </div>

        </div>
    )
}
export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-8 md:px-16 text-center space-y-6 overflow-hidden">
      <h1 className="font-nanum text-6xl md:text-8xl tracking-tight text-primary nanum-pen-script-regular">
        Sonkhoo
      </h1>
      <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
        Full-stack web & mobile developer skilled in backend, cloud, and generative AI.
      </p>
      <div className="flex gap-4 pt-4">
        <div className="px-6 py-2 bg-secondary text-primary font-medium rounded-full cursor-pointer hover:opacity-80 transition-opacity">
          View Work
        </div>
        <div className="px-6 py-2 border border-border text-foreground font-medium rounded-full cursor-pointer hover:bg-muted transition-colors">
          About Mee
        </div>
      </div>
    </div>
  );
} 

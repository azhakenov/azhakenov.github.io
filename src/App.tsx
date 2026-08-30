import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SITE } from "@/config/site";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import TeachingResources from "./pages/TeachingResources";
import About from "./pages/About";
import Cv from "./pages/Cv";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <BrowserRouter basename={SITE.base}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/research" element={<Research />} />
        {/* Old Lovable site used /academic — keep the link people already have working */}
        <Route path="/academic" element={<Navigate to="/research" replace />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/teaching/resources" element={<TeachingResources />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;

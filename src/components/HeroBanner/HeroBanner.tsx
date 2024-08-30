import React from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import VideoContent from "../VideoContent/VideoContent";

const HeroBanner: React.FC = () => {
  return (
    <article className="px-8 bg-[url('./assets/images/HeroBanner.jpg')] w-screen bg-cover bg-center min-h-[500px] lg:min-h-[400px] xl:min-h-[500px] h-[calc(100vh-200px)] mix-blend-multiply flex items-center justify-center">
      <div className="max-w-[80%] flex-1 flex mx-8 gap-4 justify-center">
        <Dialog>
          <DialogTrigger>
            <Button
              size="lg"
              className="hover:bg-[#b0a7f6] bg-[#8b7df7] flex items-center  text-[#fff] border-2 border-b-8  font-bold px-20 py-6 cursor-pointer border-[#5a4fad] p-2 rounded-lg"
            >
              Hướng Dẫn
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[96%] bg-none sm:max-w-[960px] p-0 border-none">
            <div>
              <VideoContent />
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button
              size="lg"
              className="hover:bg-[#b0a7f6] bg-[#8b7df7] flex items-center  text-[#fff] border-2 border-b-8  font-bold px-20 py-6 cursor-pointer border-[#5a4fad] p-2 rounded-lg"
            >
              Hướng Dẫn
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[96%] bg-none sm:max-w-[960px] p-0 border-none">
            <div>
              <VideoContent />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex-1"></div>
    </article>
  );
};

export default HeroBanner;

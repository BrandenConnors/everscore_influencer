import { Link } from "@remix-run/react";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export function ShareCard(props: any) {
  return (
    <div className="w-full">
      <div
        className="h-auto w-full rounded-lg shadow-lg border-2"
        id="shareWrapper"
      >
        <div className="flex flex-wrap place-content-center p-4" id="shareTop">
          <img
            className="w-12 h-12 mx-4 m-4 rounded-xl object-cover"
            src="/images/chef.JPG"
            alt="chefing"
          />
         
          <input
            placeholder="What's on your mind Shannon?"
            className="mx-auto border-0"
            id="shareInput"
          />
         
        </div>
        <hr className="m-2" id="shareHr" />
        <div className="flex justify-center" id="shareBottom">
          <div className="flex flex-wrap justify-center mr-2" id="shareOptions">
            <div className="flex items-center mx-6">
              <a href="#" className="mr-2">
                <AddAPhotoIcon htmlColor="tomato" className=" mr-2" />
              </a>
              <span className="text-xs">Upload</span>
            </div>
            <div className="flex items-center mx-6">
              <a href="#" className="mr-2">
                <Label htmlColor="blue" className=" mr-2" />
              </a>
              <span className="text-xs">Tags</span>
            </div>
            <div className="flex items-center mx-6">
              <a href="#" className="mr-2">
                <Room htmlColor="green" className=" mr-2" />
              </a>
              <span className="text-xs ">Location</span>
            </div>
            <button className="m-4 flex mx-4 items-center btn bg-blue-600">Share</button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

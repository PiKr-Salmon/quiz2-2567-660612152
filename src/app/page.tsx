"use client"

import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import { comments } from "@/libs/comments";
import { commentProps } from "@/libs/types";
import { useState } from "react";

export default function Home() {
  const [getComment, setGetComment] = useState<commentProps[]>([])
  
  try {
  const get = comments.map((comment : commentProps) => setGetComment(comment));
  setGetComment(get);

  } catch (error) {
    console.error("Error fetching users", error);
  }

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <div>
        <PostOwnner profileImgPath="/profileimages/Mys_01-08-67.jpg" 
                    profile="ปิยวัฒน์ เครือประเสริฐ 660612152" 
                    post="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" 
                    postlikes={100} />
        </div>

        {/* Comment Example */}
        

        {/* Reply Example */}
      

        {/* map-loop render Comment component here */}
        {comments.map((comment : commentProps) => <Comment ImagePath = {comment.userImagePath} username= {comment.username} commentTitle= {comment.commentText} likes={comment.likeNum}/>
                                            )}
      </div>
    </div>
  );
}

"use client";

import { postOwner } from "@/libs/types";

export default function PostOwnner({profileImgPath, profile, post, postlikes, /*comments*/}: postOwner ){
  return (
    <div className="vstack gap-3">
    <div className="d-flex align-items-center gap-3">
      <img
        src ={profileImgPath}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <span className="fw-semibold fs-5">{profile}</span>
    </div>

    <span>{post}</span>

    <div className="d-flex align-items-center gap-1">
      <img src="/like.svg" width={20}></img>
      <span className="text-muted">{postlikes} คน</span>
    </div>
    <hr className="m-0 border" />
  </div>
  );
}

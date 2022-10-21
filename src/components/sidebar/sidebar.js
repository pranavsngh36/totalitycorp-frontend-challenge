import React from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarButton Icon={HomeIcon} text="Home" />
      <SidebarButton Icon={SearchIcon} text="Explore" />
      <SidebarButton Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarButton Icon={MailOutlineIcon} text="Messages" />
      <SidebarButton Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarButton Icon={ListAltIcon} text="Lists" />
      <SidebarButton Icon={PermIdentityIcon} text="Profile" />
      <SidebarButton Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;

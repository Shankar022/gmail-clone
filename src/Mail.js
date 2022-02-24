import React from 'react'
import "./Mail.css"

import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error, ExitToApp,
  LabelImportant, MoreVert,
  MoveToInbox, Print, UnfoldMore,
  WatchLater
} from "@material-ui/icons";
import {useNavigate} from "react-router-dom";


function Mail() {

  const navigate = useNavigate();
  const backToMailListHandleClick = ()=>{
    navigate("/");
  }
  return (
    <div className='mail'>
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={backToMailListHandleClick}>
            <ArrowBack/>
          </IconButton>

          <IconButton>
            <MoveToInbox/>
          </IconButton>

          <IconButton>
            <Error/>
          </IconButton>

          <IconButton>
            <Delete/>
          </IconButton>

          <IconButton>
            <Email/>
          </IconButton>

          <IconButton>
            <WatchLater/>
          </IconButton>

          <IconButton>
            <CheckCircle/>
          </IconButton>

          <IconButton>
            <LabelImportant/>
          </IconButton>

          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore/>
          </IconButton>

          <IconButton>
            <Print/>
          </IconButton>

          <IconButton>
            <ExitToApp/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Mail
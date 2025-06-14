import { List, TaskBar } from "@react95/core";
import { Explore, FolderExe, FolderFile, Help, HelpBook, Mail2, Network3 } from "@react95/icons";
import { EventEmitter } from "./EventEmitter";
// import { useContext } from "react";

export default function WebsiteTaskbar(props) {

    const handleClick = (x) => {
        switch(x) {
          case 'terrabit':
            window.open('https://netborn.network');
            break;
          default:
            EventEmitter.dispatch(x, true);
            break;
        }
    }

    return (
        <TaskBar list={<List>
            <List.Item icon={<FolderExe/>}>
              <span onClick={() => handleClick('programs')}>Programs</span>
              <List>
                <List.Item icon={<Network3 />} onClick={() => handleClick('etf')}>
                  <span>Netborn</span>
                </List.Item>
                <List.Item icon={<Explore />} onClick={() => handleClick('terrabit')}>
                  <span>Lore</span>
                </List.Item>
              </List>
            </List.Item>
            <List.Item icon={<FolderFile/>} onClick={() => handleClick('docs')}>
              <span>Documents</span>
              <List>
                <List.Item>
                  Netborn Docs
                </List.Item>
                <List.Item>
                  Whitepaper
                </List.Item>
                <List.Item>
                  Roadmap
                </List.Item>
              </List>
            </List.Item>
            <List.Item icon={<HelpBook />}>
              Help
              <List>
                <List.Item onClick={() => handleClick('randomness')}>
                  Randomness
                </List.Item>
                <List.Item onClick={() => handleClick('timelock')}>
                  Timelock Encryption
                </List.Item>
                <List.Item onClick={() => handleClick('dtxs')}>
                  Delayed Transactions
                </List.Item>
              </List>
            </List.Item>
            <List.Divider />
            <List.Item icon={<Help/>} onClick={() => handleClick('about')}>
              <span>About</span>
            </List.Item>
            <List.Item icon={<Mail2/>} onClick={() => handleClick('contact')}>
              <span>Contact</span>
            </List.Item>
          </List>} />
    );
}
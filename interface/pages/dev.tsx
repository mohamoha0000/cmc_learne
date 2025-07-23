import { useEffect, useMemo, useState } from "react";
import Builder, { useBuilderContext } from "../builder";
import config from "../builder.config";
import { useLoader } from "../utils";
import { PageLoader } from "../comps";
 
const builder = new Builder(config as any);

const DevPage = () => {

    return (
        <>
            {builder.DevRoot((info, theme) => {
                 if(theme.primary_color) document.documentElement.style.setProperty("--main-color", theme.primary_color);
                 if(theme.secondary_color) document.documentElement.style.setProperty("--secondary-color", theme.secondary_color);
                 if(theme.light_color) document.documentElement.style.setProperty("--light-color", theme.light_color);
                 if(theme.dark_color) document.documentElement.style.setProperty("--dark-color", theme.dark_color);
            })}
        </>
        
    )
}

export default DevPage;
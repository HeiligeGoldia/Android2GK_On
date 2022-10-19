import { createContext } from "react";

const Demo = createContext()

function context ({loli}) {
    const kien = "db"
    return (<Demo.Provider value={kien}>{loli}</Demo.Provider>)
}
export {context, Demo}

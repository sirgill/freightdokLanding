import { createContext, useEffect, useState } from 'react';

export const Context = createContext({});

const DataContext = ({ children }) => {
    const [data, setData] = useState({})

    async function getHomeConfig() {
        try {
            const res = await fetch('/homeConfig.json');
            const result = await res.json();
            return result;
        } catch (error) {
            return {}
        }
    }
    async function getHeaderConfig() {
        try {
            const res = await fetch('/headerConfig.json');
            const result = await res.json();
            return result;
        } catch (error) {
            return {}
        }
    }

    useEffect(() => {
        const homeConfig = async () => {
            const response = await Promise.allSettled([getHomeConfig(), getHeaderConfig()]);
            const result = {}
            response.forEach(res => {
                if (res.status === 'fulfilled') {
                    Object.assign(result, { ...res.value })
                }
            })
            console.log(result)
            setData({
                data: result
            });
        }
        homeConfig();
    }, [])

    return <Context.Provider value={data}>
        {children}
    </Context.Provider>
}

export default DataContext;
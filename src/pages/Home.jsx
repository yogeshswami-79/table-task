import React, { useState } from 'react';
import dummyData from '../utils/constants';
import Table from '../components/Table';
import '../styles/home-style.css'

function Home() {

    const [data, setData] = useState(dummyData)
    const [headmap] = useState(new Map([["person", "Name"], ["city", "City"], ["email", "Email Address"], ["joiningDate", "joining Date"], ["role", "Role"]]));

    const headingsAll = Object.keys(data[0]).map(dta => { return { title: dta, sortable: true } })
    const headingsNER = [{ title: "person", sortable: true }, { title: "email", sortable: false }, { title: "role", sortable: false }]
    const headingsEJR = [{ title: "email", sortable: false }, { title: "joiningDate", sortable: true }, { title: "role", sortable: true }]
    const headingsNCJR = [{ title: "person", sortable: false }, { title: "city", sortable: true }, { title: "joiningDate", sortable: false }, { title: "role", sortable: true }]

    function sort(param, ordr) {
        if (!param) return;
        if (ordr) {
            if (param === "person") {
                setData(() => [...data.sort((a, b) => (a[param].name === b[param].name) ? 0 : (a[param].name > b[param].name) ? 1 : -1)])
                return;
            }
            setData(() => [...data.sort((a, b) => (a[param] === b[param]) ? 0 : (a[param] > b[param]) ? 1 : -1)])

            return;
        }

        if (param === "person") {
            setData(() => [...data.sort((a, b) => (a[param].name === b[param].name) ? 0 : (a[param].name < b[param].name) ? 1 : -1)])
            return;
        }
        setData(() => [...data.sort((a, b) => (a[param] === b[param]) ? 0 : (a[param] < b[param]) ? 1 : -1)])

    }


    return (
        <div id='home'>
            <Table data={data} headings={headingsAll} map={headmap} sort={sort} />
            <Table data={data} headings={headingsNER} map={headmap} sort={sort} />
            <Table data={data} headings={headingsEJR} map={headmap} sort={sort} />
            <Table data={data} headings={headingsNCJR} map={headmap} sort={sort} />
        </div>
    );
}
export default Home;
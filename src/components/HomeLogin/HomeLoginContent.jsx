import React from 'react'
import GetAllUser from '../../hooks/GetAllUser'

export default function HomeLoginContent(props) {
    const Get_allUser = GetAllUser(props)
    const data2 = Get_allUser?.data
    console.log("ini get", data2);

    const user = localStorage.getItem("username")
    const pass = localStorage.getItem("password")

    // data?.filter(index => index.username)

    return (
        <>

            <div>HomeLoginaaaaaaaaaaaaaaaaaaaa</div>
            <div>HomeLoginaaaaaaaaaaaaaaaaaaaa</div>
            <div>HomeLoginaaaaaaaaaaaaaaaaaaaa</div>

            <div>HomeLoginaaaaaaaaaaaaaaaaaaaa</div>
            <div>HomeLoginaaaaaaaaaaaaaaaaaaaa</div>
            <div>HomeLoginaaaaaaaaaaaaaaaaaaaa</div>
            {
                data2?.find(index => index.username == user && index.password == pass) ?
                    <>
                        SELAMAT DATANG {user} BERHASIL LOGIN
                    </>
                    :
                    <>
                        ANDA HARUS MELAKUKAN LOGIN KEMBALI / REGISTRASI ULANG
                    </>

            }

            {
                data2?.filter(index => index.username == user && index.password == pass).map((item, index2) => {
                    // return (
                    //     <>
                    //         <div key={index2}>
                    //             {item.username} <br />
                    //             {item.id}<br />
                    //             {item.email}<br />
                    //         </div>
                    //     </>
                    // )
                    if (item.username == user && item.password == pass) {
                        return (
                            <>
                                <div key={index2}>
                                    {item.username} <br />
                                    {item.id}<br />
                                    {item.email}<br />
                                </div>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <div>
                                    salah
                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
}

import React from 'react'

export default function Perfil() {
    return (
        <div>
            <h1>Hello Perfil</h1>

            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

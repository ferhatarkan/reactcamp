import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced = "right" src="https://gulferi.files.wordpress.com/2014/01/kartal.jpg"/>
                <Dropdown pointing = "top left" text = "Ferhat">
                    <Dropdown.Menu>
                        <Dropdown.Item text = "Bilgilerim" icon = "info"/>
                        <Dropdown.Item onClick = {signOut} text = "Çıkış yap" icon = "sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

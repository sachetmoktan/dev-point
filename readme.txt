1.
We will make Logout functionality. ANd change the navbar links based on logged in or not.
actions>types.js
LOGOUT
action and reducer for LOGOUT

-----------------------------------------------------------------------------------------------------------------
2. 
goto: components>layout>Navbar.js
mapStateToProps state: isAuthenticated, loading
import logout action, connect, propTypes

-----------------------------------------------------------------------------------------------------------------
3.
Create couple variable for guestLinks(not authenticated) and authLinks(authenticated)
guestLinks: Developers, Register, Login
authLinks: Logout

{!loading && (<Fragment>
                { isAuthenticated ? authLinks : guestLinks }
            </Fragment>) }

loading should be false.
isAuthenticate true then show authLinks , if false show guestLinks


-----------------------------------------------------------------------------------------------------------------





>>npm run dev


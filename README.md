# LCMM
## Presentation

> Team
 >- [Filipe Costa](https://github.com/FilipeCosta06)
> - [Nadeur Mosbah](https://github.com/Nadeur-Mosbah)
 >- [Yacine Lofti](https://github.com/LotfiYacine)
> - [Michel Marmone-Marini](https://github.com/MMarmone)

## Run project

#### Serveur side
    cd server
    yarn start
#### Client Side

## Serveur Side API
    entry point : http://localhost:3001/api
### Routes
Users routes :

    /users/register    #Post register
    /users/login       #Post login

Routes where the user must be login :

    /users/me                 #Get user info 
    /users/me/logout          #Post logout the current user 
    /users/me/logoutall       #Post logout all sessions
    /users/me/submissionForm  #Post submit a plugin
    /users/me/commentPlugin   #Post add a comment to a plugin
    /users/me/likePlugin      #Post add a like to a plugin

Plugins routes : 
    
    /pluginInfo?name=XXX    #Get the info for the plugin with name XXX
    /plugins                #Get all plugin from database

## Client Side

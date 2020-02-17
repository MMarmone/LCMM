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
    npm start
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
    cd client
    npm start
    
L'application est alors disponible à l'adresse http://localhost:3000/

## Pages
Routes accessibles sans être connecté

    /                   # page d'accueil, affichant un message (todo: ou  les meilleures ventes)
    /login              # formulaire de connexion
    /register           # formulaire de création du compte
    /logout             # déconnecte l'utilisateur, si nécessaire, puis redirige sur la page d'accueil ("/")
    todo: /articles?q=<search query>  # liste des plugin (query résultats optionel)  
    todo: /articles/{id-article} # page de détail d'un article (possibilité de like/comment/ajouter au panier/tester le plug-in)
    todo: /articles/{id-article}/playground         # tester le plug-in
    todo: /cart                                     # visualiser son panier
    
Routes accessibles seulement en étant connecté
    
    todo: /profile              # accède au profile de l'utilisateur connecté 
    todo: /submit               # accès au formulaire de soumission de plug-in
    todo: /cart/checkout        # payer les articles dans son panier
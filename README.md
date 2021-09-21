# App-React-cours
cours sur React Natif
REACT 2.0 Doranco


React permet de charger que la DOM qui a changé ce qui fait gagner du temps et des ressources.
On peut aussi écrire des composants modulables avec une seule mission, qu’on pourra ramener dans le composant parent.

EXPO est un framework de React pour faire des applications.

Installation de Expo
sudo npm install -g expo-cli 
expo --version  
sudo npm install -g npm@7.24.0 
where expo-cli 
Ensuite à l’aide du terminal j’ai choisi le dossier dans lequel je voulais travailler.

Pour créer un projet : 
expo init monapp
yarn start
Pour démarrer le serveur

Une page sur le navigateur s’est ouvert : http://localhost:19002/
On a téléchargé l’application Expo Project sur nos téléphones et flasher le QR code de la page avec l’appli, ce qui donne directement un rendu sur le téléphone.
Puis téléchargement de Android Studio pour avoir un rendu.


   <View style={styles.container}>
     <Text style={styles.titre}>Bienvenue!</Text>
     <Text style={styles.titre}>{count}</Text>
     {/* TouchableOpacity est un composant qui nous permet d'executer une
     fonction quand on appuis dessus */}
     <TouchableOpacity onPress={onclick}>
       <Text>Ajouter</Text>
     </TouchableOpacity>
     <StatusBar style="auto" />
   </View>
 );
}
TouchableOpacity permet de créer un bouton, enfin une zone cliquable.

Ne pas hésiter à relancer le serveur via le terminal régulièrement car il a tendance à crash à chaque modification.
	

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   alignItems: "center",
   justifyContent: "center",
   fontWeight: "bold",
 },
 titre: {
   fontWeight: "bold",
   padding: 25,
 },
 bouton:{
   backgroundColor:"#093357",
   padding:8,
   margin:"auto",
   width:'50%',
   color:"#bbb",
   borderRadius:5,
   alignItems:"center",
   justifyContent:"center",
 }


Le style est rentrée dans une contexte dans le fichier App.js, ce qui n’est pas conseillé en temps normal mais comme nous sommes sur un petit projet nous faisons ainsi.

Création des composants.
On a créé un dossier components dans l’arborescence. Création du fichier Button.js. On a cop col tous les boutons ainsi que le style dans ce fichier.

Utilisation de “props”.
Props est un objet 



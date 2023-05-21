const datosPerfilUser = {}

export const Profile = () => {

    return (

        <div className="profileDesign">
      {datosPerfilUser.id !== "" ? (
        <div>{datosPerfilUser.name}</div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
    

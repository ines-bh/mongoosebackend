

const addContact= async (req, res) => {
    try {
      const newContact = req.body;
  
      if (!newContact.name || !newContact.email) {
        return res.status(400).send({ msg: "name and email are required" });
      }
  
      const contactToFind = await Contact.findOne({ email: newContact.email });
      if (contactToFind) {
        return res.status(400).send({ msg: "contact already exist.." });
      }
  
      constToAdd = new Contact(newContact);
      await contactToAdd.save();
  
      res.status(200).send({ msg: "contact added succesfully", contactToAdd });
    } catch (error) {
      res.status(400).send({ msg: "can not add new contact", error });
    }
  }
  const getContact=  async (req, res) => {
    try {
      const listContacts = await Contact.find();
      res.status(200).send({ msg: "this is the list of contact", listContacts });
    } catch (error) {
      res.status(400).send({ msg: "can not get all contacts", error });
    }
  }
const deleteContact=  async(req,res)=>{
    try {
        const contactId=req.params.id
        await Contact.deleteOne({id: contactId})
        res.status(200).send({ msg: "contact deleted sucss!!!"});

    } catch (error) {
        res.status(400).send({ msg: "can not delete contact", error });
    }
}
const getOneContact= async(req,res)=>{
    try {
        const{_id}=req.params
        const contactToFind= await Contact.findOne({_id})
        res.status(200).send({ msg: "find this contact", contactToFind});
    } catch (error) {
        res.status(400).send({ msg: "can not get with this id ", error });    
    }
}
const updateContact= async(req,res)=>{
    try {
        const{_id}=req.params
        const newContact= req.body
        let result = await Contact.updateOne({_id},{$set:{...newContact}})
        console.log(result)
        if(result.nmodified===0){
            return res.status(400).send({ msg: "contact already updated" });
        }
        res.status(200).send({ msg: "update contact is succs" });
    } catch (error) {
        res.status(400).send({ msg: "can not update with this id ", error });   
    }
}
  module.exports=controllers={addContact,getContact,deleteContact,getOneContact,updateContact}
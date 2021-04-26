export const fields = {
  name: {
    type: "text",
    name: "name",
    title: "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
    required: true,
  },
  number: {
    type: "tel",
    name: "number",
    title: "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
    required: true,
  }
};
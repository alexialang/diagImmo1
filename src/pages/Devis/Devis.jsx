import styles from "./devis.module.css";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box, Select, Radio } from "@mantine/core";
import emailJs from "@emailjs/browser";

export const Devis = () => {
  emailJs.init("yij5B0qq7jkBd8l4B");

  const form = useForm({
    initialValues: {
      type: "",
      wish: "",
      electric15: "",
      gaz15: "",
      rooms: "",
      surface: "",
      constructionDate: "",
      heating: "",
      gazType: "",
      coOwnership: "",
      adress: "",
      postalCode: "",
      city: "",
      moreInfo: "",
      firstName: "",
      lastName: "",
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const sendEmail = (values) => {
    emailJs.send("service_j6i38ke", "template_64iijd5", {
      type: values.type,
      wish: values.wish,
      electric15: values.electric15,
      gaz15: values.gaz15,
      rooms: values.rooms,
      surface: values.surface,
      constructionDate: values.constructionDate,
      heating: values.heating,
      gazType: values.gazType,
      coOwnership: values.coOwnership,
      adress: values.adress,
      postalCode: values.postalCode,
      city: values.city,
      moreInfo: values.moreInfo,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.imgPano}></div>
      <div
        style={{
          marginTop: "60px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "20px",
        }}
      >
        <div>Votre bien</div>
        <div>
          <Box>
            <form onSubmit={form.onSubmit(sendEmail)}>
              <Select
                label="Type de bien..."
                placeholder="Type de bien..."
                data={[
                  "Un appartement",
                  "Une maison",
                  "Un immeuble",
                  "Un local conmercial",
                  "Des parties communes",
                  "Un terrain",
                  "Une cave",
                  "Un garage",
                  "Autre",
                ]}
                {...form.getInputProps("type")}
                required
              />
              <Radio.Group
                label="Vous souhaitez"
                withAsterisk
                required
                {...form.getInputProps("wish")}
              >
                <Group>
                  <Radio label="Vendre" value="sell" />
                  <Radio label="Louer" value="rent" />
                </Group>
              </Radio.Group>
              <Radio.Group
                required
                label="Installation elec +15ans"
                withAsterisk
                {...form.getInputProps("electric15")}
              >
                <Group>
                  <Radio label="Oui" value="yes" />
                  <Radio label="Non" value="no" />
                </Group>
              </Radio.Group>
              <Select
                withAsterisk
                required
                label="Nombre de pièces..."
                placeholder="Nombre de pièces..."
                data={[
                  "Chambre (< 12m²)",
                  "Studio",
                  "2 pièces",
                  "3 pièces",
                  "4 pièces",
                  "5 pièces",
                  "6 pièces",
                  "7 pièces",
                  "8 pièces",
                  "9 pièces",
                  "10 pièces",
                ]}
                {...form.getInputProps("rooms")}
              />
              <Radio.Group
                label="Installation gaz +15ans"
                withAsterisk
                {...form.getInputProps("gaz15")}
                required
              >
                <Group>
                  <Radio label="Oui" value="yes" />
                  <Radio label="Non" value="no" />
                </Group>
              </Radio.Group>
              <TextInput
                withAsterisk
                label="Surface habitable m²"
                {...form.getInputProps("surface")}
                required
              />
              <Select
                withAsterisk
                label="Date de construction"
                placeholder="Date de construction"
                data={[
                  "Avant Janvier 1949",
                  "Avant Juillet 1997",
                  "Après Juillet 1997",
                  "Après Juillet 1997 mais plus de 15 ans",
                  "Je ne sais pas",
                ]}
                {...form.getInputProps("constructionDate")}
                required
              />
              <Select
                withAsterisk
                label="Chauffage"
                placeholder="Chauffage"
                data={[
                  "Gaz",
                  "Electrique",
                  "Bois",
                  "Fioul",
                  "Autre",
                  "Je ne sais pas",
                ]}
                {...form.getInputProps("heating")}
                required
              />
              <Select
                withAsterisk
                label="Gaz"
                placeholder="Gaz"
                data={[
                  "Aucune installation",
                  "Gaz de ville",
                  "Gaz en citerne",
                  "Gaz en bouteille",
                  "Présence d'un compteur gaz sans abonement",
                  "Autre",
                  "Je ne sais pas",
                ]}
                {...form.getInputProps("gazType")}
                required
              />
              <Radio.Group
                label="Copropriété"
                withAsterisk
                required
                {...form.getInputProps("coOwnership")}
              >
                <Group>
                  <Radio label="Oui" value="yes" />
                  <Radio label="Non" value="no" />
                  <Radio label="Je ne sais pas" value="dontKnow" />
                </Group>
              </Radio.Group>
              <TextInput
                withAsterisk
                label="Adresse"
                autoComplete="street-address"
                {...form.getInputProps("adress")}
                required
              />
              <TextInput
                withAsterisk
                label="Code postal"
                autoComplete="postal-code"
                {...form.getInputProps("postalCode")}
                required
              />
              <TextInput
                withAsterisk
                label="Ville"
                autoComplete="address-level2"
                {...form.getInputProps("city")}
                required
              />
              <TextInput
                label="Informations complémentaires"
                placeholder="Informations complémentaires"
                {...form.getInputProps("moreInfo")}
                required
              />
              <TextInput
                withAsterisk
                label="Prénom"
                placeholder="Prénom"
                autoComplete="given-name"
                {...form.getInputProps("firstName")}
                required
              />
              <TextInput
                withAsterisk
                label="Nom"
                placeholder="Nom"
                autoComplete="family-name"
                {...form.getInputProps("lastName")}
                required
              />
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
              <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

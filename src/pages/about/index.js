import PageDescription from "@/components/PageDescription";
import { Grid, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <section>
      <PageDescription
        title="About me"
        description="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
      />

      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>Get to know me!</h2>
          <p>
            I&apos;m a Frontend Web Developer building the Front-end of Websites
            and Web Applications that leads to the success of the overall
            product. Check out some of my work in the Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming.
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Button>
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </section>
  );
}

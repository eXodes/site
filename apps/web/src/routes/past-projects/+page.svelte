<script lang="ts">
  import adam from "$lib/assets/projects/adam.webp";
  import primaAeromed from "$lib/assets/projects/aeromed.webp";
  import aiaSingapore from "$lib/assets/projects/aia-singapore.webp";
  import bellaVista from "$lib/assets/projects/bella-vista.webp";
  import celebrityFitness from "$lib/assets/projects/celebrity-fitness.webp";
  import cct from "$lib/assets/projects/city-connection-travel.webp";
  import dhuStore from "$lib/assets/projects/dhu-store.webp";
  import fitnessFirst from "$lib/assets/projects/fitness-first.webp";
  import magnum4D from "$lib/assets/projects/magnum-4d.webp";
  import maraCorp from "$lib/assets/projects/mara-corp.webp";
  import maxis from "$lib/assets/projects/maxis.webp";
  import melaka from "$lib/assets/projects/melaka-dashboard.webp";
  import melakaPOS from "$lib/assets/projects/melaka-pos.webp";
  import pocketz from "$lib/assets/projects/pocketz.webp";
  import singgahKerteh from "$lib/assets/projects/singgah-kerteh.webp";
  import { type Project, ProjectCard } from "ui";

  const PAST_PROJECTS: Project[] = [
    {
      title: "Prima Aeromed",
      description:
        "Prima Aeromed is a complete bedside-to-bedside air ambulance service for hospitals, individuals and corporations throughout Malaysia.",
      company: "Cipta Asia Worldwide",
      image: primaAeromed,
      year: 2017,
    },
    {
      title: "Bella Vista Waterfront",
      description:
        "Bella Vista Waterfront is a themed resort situated in Langkawi, Malaysia. Spanning 14 acres of landscaped gardens overlooking the Andaman Sea, it offers a picturesque setting ideal for getaways.",
      company: "Cipta Asia Worldwide",
      image: bellaVista,
      link: "http://www.bvhotelsandresorts.com",
      year: 2017,
    },
    {
      title: "City Connection Travel",
      description:
        "City Connection Travel & Tours Sdn Bhd is a travel agency based in Kuala Lumpur, Malaysia. They offer a wide range of travel services including inbound and outbound tours, ticketing, and hotel reservations.",
      company: "Cipta Asia Worldwide",
      image: cct,
      link: "http://cityconnectiontravel.com",
      year: 2017,
    },
    {
      title: "DRB-Hicom University Store",
      description:
        "DRB-Hicom University of Automotive Malaysia is a private university in Pekan, Pahang, Malaysia. It was established in 2010 and is owned by DRB-HICOM.",
      company: "Cipta Asia Worldwide",
      image: dhuStore,
      year: 2018,
    },
    {
      title: "Singgah Kerteh",
      description:
        "Singgah Kerteh is a budget hotel located in Kerteh, Terengganu, Malaysia. It offers comfortable accommodation for business and leisure travelers.",
      company: "Cipta Asia Worldwide",
      image: singgahKerteh,
      link: "https://singgah.com.my/singgah-kertih",
      year: 2018,
    },
    {
      title: "Mara Corporation",
      description:
        "Mara Corporation is an investment holding company wholly owned by Majlis Amanah Rakyat (MARA), a Malaysian government agency.",
      company: "Cipta Asia Worldwide",
      image: maraCorp,
      link: "https://maracorporation.com.my",
      year: 2018,
    },
    {
      title: "AIA Singapore",
      description:
        "AIA Singapore is part of the AIA Group, which is the largest independent publicly listed pan-Asian life insurance group in the world.",
      company: "GrowthOps (formerly APD)",
      image: aiaSingapore,
      link: "https://www.aia.com.sg",
      year: 2018,
    },
    {
      title: "Celebrity Fitness",
      description:
        "Celebrity Fitness Malaysia is a premium gym chain offering state-of-the-art facilities, dynamic group exercise classes, and certified trainers to help you achieve your fitness goals.",
      company: "GrowthOps (formerly APD)",
      image: celebrityFitness,
      link: "https://www.celebrityfitness.com",
      year: 2018,
    },
    {
      title: "Fitness First",
      description:
        "Fitness First Malaysia is a premium fitness center offering state-of-the-art equipment, diverse group classes, and certified personal trainers across 11 locations nationwide.",
      company: "GrowthOps (formerly APD)",
      image: fitnessFirst,
      link: "https://www.fitnessfirst.com",
      year: 2019,
    },
    {
      title: "Magnum 4D",
      description:
        "Magnum Corporation Sdn Bhd is a gaming company that operates the Magnum 4D brand, which offers a variety of gaming products.",
      company: "GrowthOps (formerly APD)",
      image: magnum4D,
      link: "https://magnum4d.my",
      year: 2019,
    },
    {
      title: "Maxis",
      description:
        "Maxis Berhad is a telecommunications company in Malaysia that provides a variety of communication products, applications, and value-added services for consumers, large enterprises, and small & medium businesses.",
      company: "Publicis Groupe",
      image: maxis,
      link: "https://www.maxis.com.my",
      year: 2020,
    },
    {
      title: "ADAM",
      description:
        "ADAM is a cloud-based procurement platform developed by Supplycart that streamlines the procure-to-pay process and vendor management for businesses.",
      company: "Supplycart",
      image: adam,
      link: "https://adam.supplycart.my",
      year: 2021,
    },
    {
      title: "Melaka",
      description:
        "Melaka is a comprehensive platform designed to streamline online business and retail store operations. It offers tailored solutions for various business types, including online sellers, retail stores, and brands.",
      company: "Hypefast",
      image: melaka,
      link: "https://dashboard.melaka.app",
      year: 2022,
    },
    {
      title: "Melaka POS",
      description:
        "Melaka POS is a comprehensive point-of-sale (POS) application designed to streamline business operations for retailers and online sellers.",
      company: "Hypefast",
      image: melakaPOS,
      link: "https://pos.melaka.app",
      year: 2024,
    },
    {
      title: "Pocketz",
      description:
        "Pocketz is a digital business card management system that enables professionals and businesses to create, share, and manage electronic name cards.",
      image: pocketz,
      link: "https://pocketz.me",
      year: 2024,
    },
  ];
</script>

<svelte:head>
  <title>Projects | Exo Des</title>
</svelte:head>

<main class="container mx-auto flex flex-col gap-8 px-6 py-10">
  <div class="flex items-center justify-between">
    <h1 class="text-3xl font-semibold uppercase tracking-wider">Past Projects</h1>
  </div>

  <ul class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
    {#each PAST_PROJECTS as project}
      <li class="relative h-full w-full overflow-hidden rounded-lg">
        <ProjectCard project={project} />
      </li>
    {/each}
  </ul>
</main>

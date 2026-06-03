import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import NewSplashTop from "../components/NewSplashTop";
import SimpleIntro from "../components/SimpleIntro";
import LevelUp from "../components/LevelUp";
import AdvanceAutomatedGovernance from "../components/AdvanceAutomatedGovernence";
import GetInvolved from "../components/GetInvolved";

export default function Home(): ReactNode {
  return (
    <Layout title="Common Cloud Controls" description="Description will go into a meta tag in <head />">
      <NewSplashTop />
      <main>
        <SimpleIntro />
        <LevelUp />
        <AdvanceAutomatedGovernance/>
        <GetInvolved />
      </main>
    </Layout>
  );
}

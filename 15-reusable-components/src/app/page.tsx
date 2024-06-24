"use Client";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center gap-x-4">
      {/* Chip */}
      {/* <Chip label="chip" intent="primary" />
      <Chip label="chip" intent="secondary" />
      <Chip label="chip" intent="danger" />
      <Chip label="chip" intent="warning" />
      <Chip label="chip" intent="info" />
      <Chip label="chip" intent="default" /> */}

      {/* Button */}
      <Button variant="outline" size="lg" intent="primary">
        Primary
      </Button>
      <Button variant="outline" size="lg" intent="secondary">
        Secondary
      </Button>
      <Button variant="outline" size="lg" intent="danger">
        Danger
      </Button>
      <Button size="lg" intent="primary">
        Primary
      </Button>
      <Button size="lg" intent="secondary">
        Secondary
      </Button>
      <Button size="lg" intent="danger">
        Danger
      </Button>
      <Button size="md" intent="primary">
        Primary
      </Button>
      <Button size="md" intent="secondary">
        Secondary
      </Button>
      <Button size="md" intent="danger">
        Danger
      </Button>
      <Button size="sm" intent="primary">
        Primary
      </Button>
      <Button size="sm" intent="secondary">
        Secondary
      </Button>
      <Button size="sm" intent="danger">
        Danger
      </Button>
    </div>
  );
}

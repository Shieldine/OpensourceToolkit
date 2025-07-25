import {
  Star,
  Heart,
  Scale,
  Github,
  GitFork,
  Palette,
  ExternalLink,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  showDonations?: boolean;
}

import Donations from "./Donations";

export default function Footer(props: Props) {
  const { showDonations } = props;

  return (
    <>
      {/* Open Source Section */}
      <div className="space-y-6">
        <Card className="border-2 border-dashed border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-800/50">
          <CardContent className="p-8">
            <div className="space-y-4 text-center md:space-y-6">
              <div className="flex flex-col items-center justify-center gap-2 space-x-3 md:flex-row md:gap-1">
                <div className="aspect-square rounded-full bg-slate-700 p-3">
                  <Github className="aspect-square h-6 w-fit text-white md:h-8" />
                </div>
                <h2 className="text-3xl font-bold">Open Source & Community</h2>
              </div>

              <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-lg">
                OpenSource Toolkit is built by developers, for developers. Join
                our community and help us create the best collection of
                developer utilities.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6">
                {/* GitHub */}
                <Card className="border transition-colors hover:border-slate-600">
                  <CardContent className="space-y-4 p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-black dark:bg-white">
                      <Github className="h-6 w-6 text-white dark:text-black" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">View Source Code</h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Explore the codebase, report issues, and contribute to
                        the project on GitHub.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() =>
                          window.open(
                            "https://github.com/truethari/OpensourceToolkit",
                            "_blank",
                          )
                        }
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub Repository
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Contribute */}
                <Card className="border transition-colors hover:border-slate-600">
                  <CardContent className="space-y-4 p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <GitFork className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Contribute</h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Add new tools, fix bugs, improve documentation, or
                        suggest features.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full"
                        // open in same page
                        onClick={() =>
                          window.open("/contribute-guide", "_self")
                        }
                      >
                        <Heart className="mr-2 h-4 w-4" />
                        How to Contribute
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* License */}
                <Card className="border transition-colors hover:border-slate-600">
                  <CardContent className="space-y-4 p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">MIT License</h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Free to use, modify, and distribute. Open source
                        software for everyone.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() =>
                          window.open(
                            "https://github.com/truethari/OpensourceToolkit/blob/master/LICENSE",
                            "_blank",
                          )
                        }
                      >
                        <Scale className="mr-2 h-4 w-4" />
                        View License
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 border-t pt-6">
                <Badge
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <Star className="h-3 w-3" />
                  <span>Star on GitHub</span>
                </Badge>
                <Badge
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <GitFork className="h-3 w-3" />
                  <span>Fork & Contribute</span>
                </Badge>
                <Badge
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <Heart className="h-3 w-3" />
                  <span>Made with ❤️ by Community</span>
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {showDonations && <Donations />}

      {/* Footer */}
      <div className="rounded-lg border-t pb-4 pt-8 text-center md:pb-0">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">More Tools Coming Soon</h3>
          <p className="text-muted-foreground">
            We&apos;re constantly adding new developer utilities. Stay tuned for
            more powerful tools!
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <Palette className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-muted-foreground">
              Built with modern design principles
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

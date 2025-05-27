import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <Container className="flex min-h-screen items-center justify-center">
      <div className="max-w-2xl space-y-8 text-center">
        <div className="space-y-4">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1>Audit Request Submitted Successfully!</h1>

          <p className="text-muted-foreground">
            Thank you for requesting your free tracking audit. Our expert team
            has received your request and will begin analyzing your website's
            tracking setup immediately.
          </p>
        </div>

        <div className="mb-8 rounded-lg border border-green-200 bg-green-50 p-6">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-green-800">What Happens Next</h3>
          </div>
          <p className="text-sm text-green-700">
            Our tracking specialists will conduct a comprehensive analysis of
            your website's Meta Pixel implementation, Conversions API setup, and
            overall tracking health. You'll receive your personalized audit
            report within <strong>24 hours</strong> via email.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-lg border p-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold">Expert Manual Review</h3>
            <p className="text-muted-foreground text-sm">
              Our specialists are now manually reviewing your website's tracking
              implementation, data quality, and compliance setup to identify
              optimization opportunities that automated tools miss.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold">Comprehensive Report</h3>
            <p className="text-muted-foreground text-sm">
              Within 24 hours, you'll receive a detailed report with specific
              optimization recommendations, priority fixes, and a custom
              implementation roadmap to improve your ROAS.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-slate-50 p-6">
            <h3 className="mb-4 font-semibold">
              Your Detailed Report Will Include:
            </h3>
            <div className="grid gap-3 text-left text-sm md:grid-cols-2">
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 flex-shrink-0 rounded-full"></div>
                <span>Meta Pixel health & configuration analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 flex-shrink-0 rounded-full"></div>
                <span>Conversions API setup & data quality review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 flex-shrink-0 rounded-full"></div>
                <span>iOS 14.5+ tracking optimization recommendations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 flex-shrink-0 rounded-full"></div>
                <span>Event tracking accuracy assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 flex-shrink-0 rounded-full"></div>
                <span>GDPR compliance & consent management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 flex-shrink-0 rounded-full"></div>
                <span>Attribution improvement strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 flex-shrink-0 rounded-full"></div>
                <span>Custom audience optimization tips</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 flex-shrink-0 rounded-full"></div>
                <span>Priority fixes roadmap with ROI estimates</span>
              </div>
            </div>
          </div>

          {/* Expected Impact */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-4 text-center font-semibold text-blue-800">
              Expected Impact After Implementation
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-800">20-40%</div>
                <div className="text-sm text-blue-700">
                  Improved Attribution
                </div>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-800">15-30%</div>
                <div className="text-sm text-green-700">Better ROAS</div>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-800">50-70%</div>
                <div className="text-sm text-purple-700">
                  More Data Visibility
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button asChild size="lg">
              <Link href="/contact/book-a-meeting">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-muted-foreground text-sm">
              Get ahead of the game! Book a strategy call now to discuss your
              results and implementation plan once your audit is ready.
            </p>
          </div>

          <div className="flex justify-center gap-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Back to Home
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

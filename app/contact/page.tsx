import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
export default function Contact() {
    return (
<section id="contact" className="py-20 h-11/12 bg-gray-950">
        <div className="h-full px-6">
          <h2 className="text-5xl font-bold mb-12 text-white text-center">
            Contact <span className="text-yellow-500">Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-yellow-500" />
                    <div>
                      <CardTitle className="text-gray-400">Email</CardTitle>
                      <CardDescription>fatimajaveria409@gmail.com</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-yellow-500" />
                    <div>
                      <CardTitle className="text-gray-400">Phone</CardTitle>
                      <CardDescription>03328999505</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                    <div>
                      <CardTitle className="text-gray-400">Location</CardTitle>
                      <CardDescription>Karachi, Pakistan</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-yellow-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-yellow-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-yellow-500 focus:outline-none"
              />
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

)}
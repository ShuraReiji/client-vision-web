import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import associations from "@/assets/associations.png";

const PropertySearch = () => {
  return (
    <section id="listings" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Find Your Dream Home
          </h2>
          <p className="text-lg text-muted-foreground">
            Search our extensive listings to discover your perfect property in Pahrump
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card rounded-lg shadow-lg p-8 animate-fade-in">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Location</label>
                <Input 
                  placeholder="Enter location..." 
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Property Type</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Bedrooms</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Any number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Number</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Bathrooms</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Any number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Number</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Min Price</label>
                <Input 
                  type="number" 
                  placeholder="$ Min" 
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Max Price</label>
                <Input 
                  type="number" 
                  placeholder="$ Max" 
                  className="bg-background"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full shadow-md hover:shadow-lg transition-all"
            >
              <Search className="h-5 w-5 mr-2" />
              Search Properties
            </Button>
          </form>
        </div>

        {/* Association Logos */}
        <div className="flex items-center justify-center mt-16">
          <img 
            src={associations} 
            alt="Professional Affiliations - Ridge Realty, Equal Housing Opportunity, REALTOR®, Pahrump Valley Chamber of Commerce" 
            className="max-w-full h-16 md:h-20 object-contain opacity-70"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;

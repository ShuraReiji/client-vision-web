import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import associations from "@/assets/associations.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const PropertySearch = () => {
  return (
    <section
      id="listings"
      className="
        relative py-24 md:py-36 overflow-hidden
        bg-gradient-to-b from-[#fffdf7] via-white to-[#f9f7f2]
        dark:from-[#0d1a2b] dark:via-[#0e1d33] dark:to-[#14253e]
        transition-colors duration-700
      "
    >
      {/* ✨ Animated floating gradient backdrop */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl top-[-15%] left-[-10%]"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-yellow-300/20 to-transparent rounded-full blur-3xl bottom-[-10%] right-[-5%]"
          animate={{
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Find Your Dream Home
          </h2>
          <p className="text-lg text-muted-foreground">
            Search our extensive listings to discover your perfect property in
            Pahrump
          </p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          className="
            max-w-5xl mx-auto p-[2px] rounded-2xl
            bg-gradient-to-br from-amber-300/40 via-transparent to-amber-200/10
            dark:from-primary/40 dark:via-transparent dark:to-accent/20
            shadow-[0_0_25px_rgba(255,200,80,0.15)]
            hover:shadow-[0_0_40px_rgba(255,200,80,0.25)]
            transition-all duration-500
          "
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="
              bg-white/80 dark:bg-gray-900/60
              backdrop-blur-md rounded-2xl p-8
              shadow-lg hover:shadow-xl transition-all duration-500
            "
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Location",
                  "Property Type",
                  "Bedrooms",
                  "Bathrooms",
                  "Min Price",
                  "Max Price",
                ].map((label, i) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-foreground">
                      {label}
                    </label>
                    {label === "Location" || label.includes("Price") ? (
                      <Input
                        placeholder={
                          label.includes("Price")
                            ? `$ ${label.split(" ")[0]}`
                            : "Enter location..."
                        }
                        className="bg-background"
                      />
                    ) : (
                      <Select>
                        <SelectTrigger className="bg-background">
                          <SelectValue
                            placeholder={
                              label === "Property Type"
                                ? "Select type"
                                : "Any number"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {label === "Property Type" ? (
                            <>
                              <SelectItem value="residential">
                                Residential
                              </SelectItem>
                              <SelectItem value="commercial">
                                Commercial
                              </SelectItem>
                              <SelectItem value="land">Land</SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem value="any">Any Number</SelectItem>
                              <SelectItem value="1">1+</SelectItem>
                              <SelectItem value="2">2+</SelectItem>
                              <SelectItem value="3">3+</SelectItem>
                              <SelectItem value="4">4+</SelectItem>
                              {label === "Bedrooms" && (
                                <SelectItem value="5">5+</SelectItem>
                              )}
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                custom={7}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="
                    w-full shadow-md hover:shadow-lg transition-all duration-300
                    bg-gradient-to-r from-amber-400 to-amber-500
                    hover:from-amber-500 hover:to-amber-600
                    text-white font-semibold
                  "
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search Properties
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        {/* Association Logos */}
        <motion.div
          className="flex items-center justify-center mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={8}
        >
          <img
            src={associations}
            alt="Professional Affiliations - Ridge Realty, Equal Housing Opportunity, REALTOR®, Pahrump Valley Chamber of Commerce"
            className="max-w-full h-16 md:h-20 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PropertySearch;

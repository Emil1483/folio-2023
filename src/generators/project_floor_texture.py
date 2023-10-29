from PIL import Image, ImageDraw, ImageFont


def generate_texture(title: str, body: str, role: str, at: str, path: str):
    width, height = 2048, 1024
    background_color = (0, 0, 0)
    image = Image.new("RGB", (width, height), background_color)

    draw = ImageDraw.Draw(image)

    font_headline = ImageFont.truetype("fonts/Oswald-Bold.ttf", 103)
    font_body = ImageFont.truetype("fonts/Oswald-Regular.ttf", 47)
    font_tag = ImageFont.truetype("fonts/Oswald-SemiBold.ttf", 32)

    def get_text_width(text: str, font):
        text_bbox = draw.textbbox((width, height), text, font=font)
        x0, _, x1, _ = text_bbox
        text_width = x1 - x0
        return text_width

    def wrap_text(text, max_width, font):
        lines = []
        current_line = ""

        for word in text.split():
            if get_text_width(current_line + " " + word, font) <= max_width:
                if current_line:
                    current_line += " " + word
                else:
                    current_line = word
            else:
                lines.append(current_line)
                current_line = word

        if current_line:
            lines.append(current_line)

        return lines

    def draw_headline(text: str):
        draw.text(
            (2, -36),
            text.upper(),
            fill=(255, 255, 255),
            font=font_headline,
        )

    def draw_body(text: str):
        paragraphs = [wrap_text(s, 870, font_body) for s in text.upper().split("\n")]

        draw.text(
            (-2, 135),
            "\n\n".join(["\n".join(p) for p in paragraphs]),
            fill=(255, 255, 255),
            font=font_body,
        )

    def draw_tag(y, tag_type: str, tag_value: str):
        text_width = get_text_width(tag_type.upper(), font_tag)

        x = 958
        w, h = text_width + 16, 39
        draw.rectangle(((x, y), (x + w, y + h)), (255, 255, 255))

        draw.text(
            (x + (w - text_width) // 2, y - 6),
            tag_type.upper(),
            fill=(0, 0, 0),
            font=font_tag,
        )

        draw.text(
            (x, y + h),
            tag_value.upper(),
            fill=(255, 255, 255),
            font=font_body,
        )

    draw_headline(title)
    draw_body(body)

    draw_tag(163, "Role", role)

    draw_tag(390, "At", at)

    image.save(f"{path}/floorTexture.png")

    image.close()

    print(f"Image saved as '{path}/floorTexture.png'")


if __name__ == "__main__":
    generate_texture(
        path="../models/projects/oppkjoring",
        title="Oppkjoring.com",
        body="Oppkjoring.com is a program that checks the road administration's website for available driver's licence test sessions to help people get their driver's licenses faster. in norway, it is difficult to get your driver's license test because there rarely are available sessions.\nHowever, with oppkjoring.com, anyone can sign up to receive mail and sms as soon as a session becomes available.",
        role="Lead Developer",
        at="Djupvik Technology",
    )
    generate_texture(
        path="../models/projects/tings",
        title="Tings",
        body="Tings is the app for your stuff, making ownership, repair, and sale easy. The user's stuff show up in the app after the user either uploads pictures of their reciets, or allows Tings to automaitcly fetch their purchase history at certain retailers.",
        role="Backend Developer",
        at="Tings",
    )
    generate_texture(
        path="../models/projects/yamuntu",
        title="yamuntu",
        body="yamuntu handles cash back on products you have purchased after you have posted about the product on social media.\nHere, I helped maintain their mobile app, web app, back-end solution, as well as their admin dashboard.",
        role="Full-Stack Developer",
        at="yamuntu",
    )

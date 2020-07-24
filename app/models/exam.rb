class Exam < ApplicationRecord
  belongs_to :patient

  belongs_to :point_po, class_name: "Point", :foreign_key => 'point_po_id', dependent: :destroy
  belongs_to :point_or, class_name: "Point", :foreign_key => 'point_or_id', dependent: :destroy
  belongs_to :point_a, class_name: "Point", :foreign_key => 'point_n_id', dependent: :destroy
  belongs_to :point_n, class_name: "Point", :foreign_key => 'point_a_id', dependent: :destroy

  accepts_nested_attributes_for :point_po
  accepts_nested_attributes_for :point_or
  accepts_nested_attributes_for :point_n
  accepts_nested_attributes_for :point_a

  def maxillary_depth_angle
    return nil if self.point_po.x.nil? or self.point_po.y.nil? or self.point_or.x.nil? or self.point_or.y.nil? or self.point_n.x.nil? or self.point_n.y.nil? or self.point_a.x.nil? or self.point_a.y.nil?
    m_line_a = slope_line(point_po, point_or)
    m_line_b = slope_line(point_n, point_a)
    angle = lines_angle(m_line_a, m_line_b)
    maxillary_depth_angle = point_a.x < point_n.x ? angle : 180 - angle
    return maxillary_depth_angle
    end

  def slope_line(point_a, point_b)
    return (point_b.y - point_a.y) / (point_b.x - point_a.x)
  end

  def lines_angle(m_line_a, m_line_b)
    tg_angle = (m_line_b - m_line_a)/(1 + m_line_b*m_line_a)
    tg_angle = -tg_angle if tg_angle < 0
    return Math.atan(tg_angle)*180/Math::PI
  end
end
